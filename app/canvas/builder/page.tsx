"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, Send } from 'lucide-react'

type NodeType = "frontend" | "backend" | "ai" | "text"

interface Node {
  id: string
  type: NodeType
  label: string
  x: number
  y: number
  width: number
  height: number
}

interface Arrow {
  id: string
  from: string
  to: string
}

const GRID_SIZE = 20

const availableNodes: { type: NodeType; label: string; options: string[] }[] = [
  { type: "frontend", label: "Frontend", options: ["User", "Chat", "Web / Mobile App"] },
  { type: "backend", label: "Backend", options: ["Server API", "Database", "Cache"] },
  { type: "ai", label: "AI", options: ["LLM", "Agent", "RAG"] },
  { type: "text", label: "Custom", options: ["Text Block"] },
]

const nodeColors = {
  frontend: "bg-blue-500/10 border-blue-400/40",
  backend: "bg-orange-500/10 border-orange-400/40",
  ai: "bg-cyan-500/10 border-cyan-400/40",
  text: "bg-gray-500/10 border-gray-400/40",
}

const snapToGrid = (value: number) => Math.round(value / GRID_SIZE) * GRID_SIZE

export default function WorkflowBuilderPage() {
  const [nodes, setNodes] = useState<Node[]>([
    { id: "1", type: "frontend", label: "Web / Mobile App", x: 100, y: 180, width: 160, height: 100 },
    { id: "2", type: "backend", label: "Server API", x: 340, y: 180, width: 140, height: 80 },
    { id: "3", type: "ai", label: "LLM", x: 560, y: 100, width: 120, height: 80 },
    { id: "4", type: "backend", label: "Database", x: 760, y: 100, width: 140, height: 80 },
    { id: "5", type: "ai", label: "RAG", x: 340, y: 320, width: 120, height: 80 },
    { id: "6", type: "backend", label: "Database", x: 340, y: 460, width: 140, height: 80 },
  ])
  const [arrows, setArrows] = useState<Arrow[]>([
    { id: "a1", from: "1", to: "2" },
    { id: "a2", from: "2", to: "3" },
    { id: "a3", from: "3", to: "4" },
    { id: "a4", from: "2", to: "5" },
    { id: "a5", from: "5", to: "6" },
  ])
  const [draggingNode, setDraggingNode] = useState<Node | null>(null)
  const [resizingNode, setResizingNode] = useState<{ node: Node; direction: string } | null>(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [showSubmitDialog, setShowSubmitDialog] = useState(false)
  const [connectingFrom, setConnectingFrom] = useState<string | null>(null)
  const canvasRef = useRef<HTMLDivElement>(null)

  const handleNodeDragStart = (node: Node, e: React.MouseEvent) => {
    const rect = canvasRef.current?.getBoundingClientRect()
    if (rect) {
      setOffset({
        x: e.clientX - (node.x + rect.left),
        y: e.clientY - (node.y + rect.top),
      })
      setDraggingNode(node)
    }
  }

  const handleResizeStart = (node: Node, direction: string, e: React.MouseEvent) => {
    e.stopPropagation()
    setResizingNode({ node, direction })
    setOffset({ x: e.clientX, y: e.clientY })
  }

  const handleCanvasMouseMove = (e: React.MouseEvent) => {
    if (draggingNode && canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect()
      const newX = snapToGrid(e.clientX - rect.left - offset.x)
      const newY = snapToGrid(e.clientY - rect.top - offset.y)

      setNodes((prev) =>
        prev.map((n) => (n.id === draggingNode.id ? { ...n, x: newX, y: newY } : n))
      )
    }

    if (resizingNode && canvasRef.current) {
      const deltaX = e.clientX - offset.x
      const deltaY = e.clientY - offset.y
      
      setNodes((prev) =>
        prev.map((n) => {
          if (n.id === resizingNode.node.id) {
            let newWidth = n.width
            let newHeight = n.height
            let newX = n.x
            let newY = n.y

            if (resizingNode.direction.includes('e')) newWidth = snapToGrid(n.width + deltaX)
            if (resizingNode.direction.includes('s')) newHeight = snapToGrid(n.height + deltaY)
            if (resizingNode.direction.includes('w')) {
              newWidth = snapToGrid(n.width - deltaX)
              newX = snapToGrid(n.x + deltaX)
            }
            if (resizingNode.direction.includes('n')) {
              newHeight = snapToGrid(n.height - deltaY)
              newY = snapToGrid(n.y + deltaY)
            }

            return {
              ...n,
              x: newX,
              y: newY,
              width: Math.max(100, newWidth),
              height: Math.max(60, newHeight),
            }
          }
          return n
        })
      )
      setOffset({ x: e.clientX, y: e.clientY })
    }
  }

  const handleCanvasMouseUp = () => {
    setDraggingNode(null)
    setResizingNode(null)
  }

  const addNode = (type: NodeType, label: string) => {
    const newNode: Node = {
      id: Date.now().toString(),
      type,
      label,
      x: snapToGrid(Math.random() * 400 + 100),
      y: snapToGrid(Math.random() * 300 + 100),
      width: 140,
      height: 80,
    }
    setNodes([...nodes, newNode])
  }

  const handleNodeClick = (nodeId: string, e: React.MouseEvent) => {
    if (e.shiftKey) {
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
  }

  const clearCanvas = () => {
    setNodes([])
    setArrows([])
    setConnectingFrom(null)
  }

  const handleSubmit = () => {
    if (nodes.length === 0) {
      alert("Please add some components to your workflow first!")
      return
    }
    setShowSubmitDialog(true)
  }

  const handleTextEdit = (id: string, newText: string) => {
    setNodes((prev) =>
      prev.map((n) => (n.id === id ? { ...n, label: newText } : n))
    )
  }

  const getNodeCenter = (nodeId: string) => {
    const node = nodes.find((n) => n.id === nodeId)
    if (!node) return { x: 0, y: 0 }
    return {
      x: node.x + node.width / 2,
      y: node.y + node.height / 2,
    }
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
              <h1 className="text-2xl font-bold">AI Workflow Builder</h1>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" onClick={clearCanvas}>
                Clear Canvas
              </Button>
              <Button onClick={handleSubmit} className="gap-2">
                <Send className="h-4 w-4" />
                Submit Workflow
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-73px)]">
        {/* Sidebar */}
        <div className="w-80 border-r border-border bg-accent/30 p-6 overflow-y-auto">
          <h2 className="text-lg font-semibold mb-4">Components</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Build your AI system architecture. Submit it for consultation.
          </p>

          <div className="mb-6 p-4 bg-accent/50 rounded-lg border border-border">
            <h3 className="text-sm font-semibold mb-2">Tips</h3>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Drag nodes to move them</li>
              <li>• Drag corners to resize</li>
              <li>• Shift + Click to connect nodes</li>
              <li>• Nodes snap to grid</li>
            </ul>
          </div>

          {availableNodes.map((category) => (
            <div key={category.type} className="mb-6">
              <h3 className="text-sm font-semibold uppercase text-muted-foreground mb-3">
                {category.label}
              </h3>
              <div className="space-y-2">
                {category.options.map((label) => (
                  <button
                    key={label}
                    onClick={() => addNode(category.type, label)}
                    className={`w-full p-3 rounded-lg border-2 text-left text-sm font-medium transition-all hover:scale-105 ${
                      nodeColors[category.type]
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
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
              {arrows.map((arrow) => {
                const from = getNodeCenter(arrow.from)
                const to = getNodeCenter(arrow.to)
                const midX = (from.x + to.x) / 2
                const midY = (from.y + to.y) / 2
                
                return (
                  <g key={arrow.id}>
                    <path
                      d={`M ${from.x} ${from.y} Q ${midX} ${from.y} ${midX} ${midY} T ${to.x} ${to.y}`}
                      stroke="rgba(255, 255, 255, 0.3)"
                      strokeWidth="2"
                      fill="none"
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
                  <polygon points="0 0, 10 3, 0 6" fill="rgba(255, 255, 255, 0.3)" />
                </marker>
              </defs>
            </svg>

            {nodes.map((node) => (
              <div
                key={node.id}
                className={`absolute cursor-move p-4 rounded-lg border-2 shadow-lg backdrop-blur-sm ${
                  nodeColors[node.type]
                } ${draggingNode?.id === node.id ? "opacity-50" : ""} ${
                  connectingFrom === node.id ? "ring-2 ring-white" : ""
                }`}
                style={{
                  left: `${node.x}px`,
                  top: `${node.y}px`,
                  width: `${node.width}px`,
                  height: `${node.height}px`,
                  zIndex: node.type === "text" ? 5 : 10,
                }}
                onMouseDown={(e) => handleNodeDragStart(node, e)}
                onClick={(e) => handleNodeClick(node.id, e)}
              >
                {node.type === "text" ? (
                  <textarea
                    className="w-full h-full bg-transparent border-0 focus:outline-none resize-none text-sm"
                    placeholder="Enter your text..."
                    value={node.label === "Text Block" ? "" : node.label}
                    onChange={(e) => handleTextEdit(node.id, e.target.value)}
                    onClick={(e) => e.stopPropagation()}
                  />
                ) : (
                  <>
                    <div className="text-xs uppercase font-semibold text-muted-foreground mb-1">
                      {node.type}
                    </div>
                    <div className="font-medium">{node.label}</div>
                  </>
                )}

                {['nw', 'ne', 'sw', 'se'].map((direction) => (
                  <div
                    key={direction}
                    className={`absolute w-3 h-3 bg-white rounded-full cursor-${direction}-resize`}
                    style={{
                      top: direction.includes('n') ? '-6px' : 'auto',
                      bottom: direction.includes('s') ? '-6px' : 'auto',
                      left: direction.includes('w') ? '-6px' : 'auto',
                      right: direction.includes('e') ? '-6px' : 'auto',
                    }}
                    onMouseDown={(e) => handleResizeStart(node, direction, e)}
                  />
                ))}
              </div>
            ))}

            {nodes.length === 0 && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-muted-foreground max-w-md">
                  <p className="text-lg font-medium mb-2">Design your AI workflow</p>
                  <p className="text-sm">
                    Add components from the sidebar and arrange them to visualize your desired AI system
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Submit Dialog */}
      {showSubmitDialog && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <Card className="max-w-md w-full">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Submit Your Workflow</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Thank you for designing your workflow! To proceed, please send us your contact information along with a screenshot of your workflow.
              </p>
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-md bg-background border border-border focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message (Optional)</label>
                  <textarea
                    className="w-full px-4 py-2 rounded-md bg-background border border-border focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    rows={3}
                    placeholder="Tell us about your project..."
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setShowSubmitDialog(false)} className="flex-1">
                  Cancel
                </Button>
                <Button onClick={() => alert("Workflow submitted! We'll be in touch soon.")} className="flex-1">
                  Submit
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
