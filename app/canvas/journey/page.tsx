"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, Play, Sparkles, X } from 'lucide-react'

type NodeType = "trigger" | "action" | "outcome"

interface Node {
  id: string
  type: NodeType
  label: string
  x: number
  y: number
}

interface Arrow {
  id: string
  from: string
  to: string
}

const availableNodes: { type: NodeType; options: string[] } = {
  trigger: [
    "I feel like missing out on AI, but don't know where to start",
    "I have a clear AI goal in mind",
    "I have an AI problem that needs solving"
  ],
  action: ["Discovery call", "Workshop", "Prototype development", "Implementation"],
  outcome: ["Consultation", "Building a prototype", "Full implementation", "Success!", "Fail"],
}

const nodeColors = {
  trigger: "bg-blue-500/20 border-blue-500",
  action: "bg-green-500/20 border-green-500",
  outcome: "bg-purple-500/20 border-purple-500",
}

export default function JourneyCanvasPage() {
  const [nodes, setNodes] = useState<Node[]>([
    { id: "1", type: "trigger", label: "I have a clear AI goal in mind", x: 100, y: 200 },
    { id: "2", type: "action", label: "Discovery call", x: 400, y: 200 },
    { id: "3", type: "action", label: "Prototype development", x: 700, y: 200 },
    { id: "4", type: "outcome", label: "Building a prototype", x: 1000, y: 200 },
  ])
  const [arrows, setArrows] = useState<Arrow[]>([
    { id: "a1", from: "1", to: "2" },
    { id: "a2", from: "2", to: "3" },
    { id: "a3", from: "3", to: "4" },
  ])
  const [draggingNode, setDraggingNode] = useState<Node | null>(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [connectingFrom, setConnectingFrom] = useState<string | null>(null)
  const [runResult, setRunResult] = useState<{ node: Node; content: string } | null>(null)
  const canvasRef = useRef<HTMLDivElement>(null)

  const handleNodeDragStart = (node: Node, e: React.MouseEvent) => {
    if ((e.target as HTMLElement).classList.contains('connect-handle')) return
    const rect = canvasRef.current?.getBoundingClientRect()
    if (rect) {
      setOffset({
        x: e.clientX - (node.x + rect.left),
        y: e.clientY - (node.y + rect.top),
      })
      setDraggingNode(node)
    }
  }

  const handleCanvasMouseMove = (e: React.MouseEvent) => {
    if (draggingNode && canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect()
      const newX = e.clientX - rect.left - offset.x
      const newY = e.clientY - rect.top - offset.y

      setNodes((prev) =>
        prev.map((n) => (n.id === draggingNode.id ? { ...n, x: newX, y: newY } : n))
      )
    }
  }

  const handleCanvasMouseUp = () => {
    setDraggingNode(null)
  }

  const addNode = (type: NodeType, label: string) => {
    const newNode: Node = {
      id: Date.now().toString(),
      type,
      label,
      x: Math.random() * 400 + 100,
      y: Math.random() * 300 + 100,
    }
    setNodes([...nodes, newNode])
  }

  const handleConnectClick = (nodeId: string) => {
    if (connectingFrom === null) {
      setConnectingFrom(nodeId)
    } else if (connectingFrom !== nodeId) {
      const newArrow: Arrow = {
        id: Date.now().toString(),
        from: connectingFrom,
        to: nodeId,
      }
      setArrows([...arrows, newArrow])
      setConnectingFrom(null)
    }
  }

  const clearCanvas = () => {
    setNodes([])
    setArrows([])
  }

  const handleRunWorkflow = () => {
    const triggerNode = nodes.find(n => n.type === "trigger")
    if (!triggerNode) {
      alert("Add a trigger node to start the workflow!")
      return
    }

    let content = ""
    if (triggerNode.type === "trigger") {
      content = "Let's start with a discovery call! Contact us to discuss your needs."
    }
    
    setRunResult({ node: triggerNode, content })
  }

  const getArrowPath = (from: Node, to: Node) => {
    const fromX = from.x + 180 / 2
    const fromY = from.y + 60
    const toX = to.x + 180 / 2
    const toY = to.y + 60

    const midX = (fromX + toX) / 2
    
    return `M ${fromX} ${fromY} Q ${midX} ${fromY} ${midX} ${(fromY + toY) / 2} T ${toX} ${toY}`
  }

  return (
    <div className="min-h-screen bg-background select-none">
      {/* Header */}
      <div className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </Button>
              </Link>
              <h1 className="text-2xl font-bold">User Journey Builder</h1>
            </div>
            <div className="flex gap-2">
              <Button variant="default" onClick={handleRunWorkflow} className="gap-2">
                <Play className="h-4 w-4" />
                Run Workflow
              </Button>
              <Button variant="outline" onClick={clearCanvas}>
                Clear Canvas
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-73px)]">
        {/* Sidebar */}
        <div className="w-80 border-r border-border bg-accent/30 p-6 overflow-y-auto">
          <h2 className="text-lg font-semibold mb-4">Building Blocks</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Drag and drop cards to build your user journey. Click connecting dots to draw arrows.
          </p>

          {Object.entries(availableNodes).map(([type, options]) => (
            <div key={type} className="mb-6">
              <h3 className="text-sm font-semibold uppercase text-muted-foreground mb-3">
                {type}
              </h3>
              <div className="space-y-2">
                {options.map((label) => (
                  <button
                    key={label}
                    onClick={() => addNode(type as NodeType, label)}
                    className={`w-full p-3 rounded-lg border-2 text-left text-sm font-medium transition-all hover:scale-105 ${
                      nodeColors[type as NodeType]
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Canvas */}
        <div className="flex-1 relative overflow-hidden bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:20px_20px]">
          <div
            ref={canvasRef}
            className="w-full h-full relative"
            onMouseMove={handleCanvasMouseMove}
            onMouseUp={handleCanvasMouseUp}
            onMouseLeave={handleCanvasMouseUp}
          >
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
              {arrows.map((arrow) => {
                const fromNode = nodes.find((n) => n.id === arrow.from)
                const toNode = nodes.find((n) => n.id === arrow.to)
                if (!fromNode || !toNode) return null
                
                const path = getArrowPath(fromNode, toNode)
                
                return (
                  <g key={arrow.id}>
                    <path
                      d={path}
                      fill="none"
                      stroke="rgba(255, 255, 255, 0.3)"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead)"
                    />
                  </g>
                )
              })}
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="10"
                  markerHeight="10"
                  refX="9"
                  refY="3"
                  orient="auto"
                >
                  <polygon
                    points="0 0, 10 3, 0 6"
                    fill="rgba(255, 255, 255, 0.3)"
                  />
                </marker>
              </defs>
            </svg>

            {/* Nodes */}
            {nodes.map((node) => (
              <div
                key={node.id}
                className={`absolute cursor-move p-4 rounded-lg border-2 shadow-lg backdrop-blur-sm ${
                  nodeColors[node.type]
                } ${draggingNode?.id === node.id ? "opacity-50" : ""} z-10`}
                style={{
                  left: `${node.x}px`,
                  top: `${node.y}px`,
                  minWidth: "180px",
                }}
                onMouseDown={(e) => handleNodeDragStart(node, e)}
              >
                <div className="text-xs uppercase font-semibold text-muted-foreground mb-1">
                  {node.type}
                </div>
                <div className="font-medium text-sm">{node.label}</div>
                
                {/* Connection handle */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleConnectClick(node.id)
                  }}
                  className={`connect-handle absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 transition-all pointer-events-auto ${
                    connectingFrom === node.id
                      ? "bg-yellow-400 border-yellow-500 scale-125"
                      : "bg-background border-muted-foreground hover:bg-muted"
                  }`}
                />
              </div>
            ))}

            {nodes.length === 0 && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <p className="text-lg font-medium mb-2">Pre-loaded workflow ready</p>
                  <p className="text-sm">Add more blocks from the sidebar or click Run Workflow</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {runResult && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <Card className="max-w-md p-6 m-4 relative">
            <button
              onClick={() => setRunResult(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>
            
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="h-6 w-6 text-yellow-500" />
              <h3 className="text-xl font-bold">Workflow Started!</h3>
            </div>
            
            <div className="mb-4">
              <div className={`inline-block px-3 py-1 rounded text-sm font-medium ${nodeColors[runResult.node.type]}`}>
                {runResult.node.label}
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6">{runResult.content}</p>
            
            <div className="flex gap-2">
              <Link href="/#contact" className="flex-1">
                <Button className="w-full">Contact Us</Button>
              </Link>
              <Button variant="outline" onClick={() => setRunResult(null)}>
                Close
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}
