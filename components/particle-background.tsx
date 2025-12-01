'use client'

import { useEffect, useRef, useState } from 'react'
import { Settings, Shuffle } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface AnimationParams {
  particleCount: number
  speed: number
  noiseScale: number
  strengthNoiseScale: number
  trailFadeSpeed: number
  foamChance: number
  foamLifetime: number
  cursorGravity: number
  cursorRadius: number
  brightness: number // Added brightness parameter to control overall particle/trail brightness
}

const defaultParams: AnimationParams = {
  particleCount: 10000,
  speed: 0.85,
  noiseScale: 0.004,
  strengthNoiseScale: 0.01,
  trailFadeSpeed: 10,
  foamChance: 0.4,
  foamLifetime: 30,
  cursorGravity: 200, 
  cursorRadius: 300,
  brightness: 0.75, // Default brightness at 50% (0 = invisible, 1 = full brightness)
}

export function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [showSettings, setShowSettings] = useState(false)
  const [params, setParams] = useState<AnimationParams>(defaultParams)
  const paramsRef = useRef<AnimationParams>(params)

  useEffect(() => {
    paramsRef.current = params
  }, [params])

  const randomizeParams = () => {
    const logMin = Math.log(100)
    const logMax = Math.log(50000)
    const randomLog = logMin + Math.random() * (logMax - logMin)
    const particleCount = Math.round(Math.exp(randomLog))

    const logMinFlow = Math.log(0.001)
    const logMaxFlow = Math.log(0.5)
    const randomLogFlow = logMinFlow + Math.random() * (logMaxFlow - logMinFlow)
    const noiseScale = Math.exp(randomLogFlow)


    const logMinFadeSpeed = Math.log(1)
    const logMaxFadeSpeed = Math.log(100)
    const randomLogFadeSpeed = logMinFadeSpeed + Math.random() * (logMaxFadeSpeed - logMinFadeSpeed)
    const fadeSpeed = Math.round(Math.exp(randomLogFadeSpeed))

    

    setParams({
      particleCount: Math.max(100, Math.min(50000, particleCount)),
      speed: Math.random() * 3,
      noiseScale: parseFloat(noiseScale.toFixed(4)),
      strengthNoiseScale: Math.random() * 0.02 + 0.005,
      trailFadeSpeed: fadeSpeed,
      foamChance: Math.random() * 0.4,
      foamLifetime: Math.round(Math.random() * 90 + 10),
      cursorGravity: Math.round(Math.random() * 250 + 50),
      cursorRadius: Math.round(Math.random() * 400 + 100),
      brightness: Math.random() * 0.4 + 0.6, // Random brightness between 0.2 and 1.0
    })
  }

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.4/p5.min.js'
    script.async = true
    
    script.onload = () => {
      // @ts-ignore
      const p5 = window.p5
      
      if (!p5) return

      const sketch = (p: any) => {
        let particles: any[] = []
        const colorNoiseScale = 0.0005

        const darkBase = [20, 25, 30]

        class Particle {
          pos: any
          prevPos: any
          type: 'wave' | 'foam'
          lifetime: number
          initialLifetime: number

          constructor(x: number, y: number) {
            this.pos = p.createVector(x, y)
            this.prevPos = this.pos.copy()
            this.type = 'wave'
            this.lifetime = p.random(10, 50)
            this.initialLifetime = this.lifetime
          }

          update() {
            if (this.type === 'foam') {
              this.lifetime--
              if (this.lifetime <= 0) {
                this.reset()
              }
              return
            }

            this.prevPos = this.pos.copy()

            const angleNoise = p.noise(this.pos.x * paramsRef.current.noiseScale, this.pos.y * paramsRef.current.noiseScale)
            const angle = p.TAU * angleNoise

            const strengthNoiseValue = p.noise(
              this.pos.x * paramsRef.current.strengthNoiseScale + 40000,
              this.pos.y * paramsRef.current.strengthNoiseScale + 40000
            )
            const strength = p.map(strengthNoiseValue, 0, 1, 0.5, 4) * paramsRef.current.speed

            this.pos.x += p.cos(angle) * strength
            this.pos.y += p.sin(angle) * strength

            const dx = p.mouseX - this.pos.x
            const dy = p.mouseY - this.pos.y
            const distance = Math.sqrt(dx * dx + dy * dy)
            
            if (distance < paramsRef.current.cursorRadius && distance > 0) {
              const force = paramsRef.current.cursorGravity * (1 - distance / paramsRef.current.cursorRadius)
              this.pos.x += (dx / distance) * force * 0.01
              this.pos.y += (dy / distance) * force * 0.01
            }

            if (strength > 2.5 && p.random() < paramsRef.current.foamChance) {
              this.type = 'foam'
              this.lifetime = paramsRef.current.foamLifetime
              this.initialLifetime = this.lifetime
            }

            this.edges()
          }

          draw() {
            const brightness = paramsRef.current.brightness
            
            if (this.type === 'foam') {
              const alpha = p.map(this.lifetime, 0, this.initialLifetime, 0, 80 * brightness)
              const foamR = 200 * brightness
              const foamG = 210 * brightness
              const foamB = 220 * brightness
              p.stroke(foamR, foamG, foamB, alpha)
              p.point(this.pos.x, this.pos.y)
            } else {
              const trailR = 180 * brightness
              const trailG = 190 * brightness
              const trailB = 200 * brightness
              const trailAlpha = 50 * brightness
              p.stroke(trailR, trailG, trailB, trailAlpha)
              p.line(this.prevPos.x, this.prevPos.y, this.pos.x, this.pos.y)
            }
          }

          reset() {
            this.pos.x = p.random(p.width)
            this.pos.y = p.random(p.height)
            this.prevPos = this.pos.copy()
            this.type = 'wave'
          }

          edges() {
            if (this.pos.x > p.width || this.pos.x < 0 || this.pos.y > p.height || this.pos.y < 0) {
              this.reset()
            }
          }
        }

        p.setup = () => {
          const canvas = p.createCanvas(p.windowWidth, p.windowHeight)
          canvas.parent(containerRef.current)
          for (let i = 0; i < paramsRef.current.particleCount; i++) {
            particles.push(new Particle(p.random(p.width), p.random(p.height)))
          }
        }

        p.draw = () => {
          const bgNoise = p.noise(p.frameCount * colorNoiseScale)
          const bgColor = p.lerpColor(
            p.color(darkBase[0], darkBase[1], darkBase[2]),
            p.color(15, 20, 28),
            bgNoise
          )
          p.background(p.red(bgColor), p.green(bgColor), p.blue(bgColor), paramsRef.current.trailFadeSpeed)

          while (particles.length < paramsRef.current.particleCount) {
            particles.push(new Particle(p.random(p.width), p.random(p.height)))
          }
          while (particles.length > paramsRef.current.particleCount) {
            particles.pop()
          }

          for (let i = 0; i < particles.length; i++) {
            particles[i].update()
            particles[i].draw()
          }
        }

        p.windowResized = () => {
          p.resizeCanvas(p.windowWidth, p.windowHeight)
        }

        p.mousePressed = () => {
          p.noiseSeed(p.millis())
        }
      }

      if (containerRef.current) {
        new p5(sketch)
      }
    }

    document.head.appendChild(script)

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  return (
    <>
      <div
        ref={containerRef}
        className="fixed inset-0 -z-10 select-none"
        style={{ width: '100vw', height: '100vh' }}
      />
      
      <div className="fixed bottom-6 right-6 z-50 flex gap-2 select-none">
        <Button
          size="icon"
          variant="outline"
          onClick={randomizeParams}
          className="rounded-full bg-background/80 backdrop-blur-sm"
          title="Randomize Settings"
        >
          <Shuffle className="h-4 w-4" />
        </Button>
        <Button
          size="icon"
          variant="outline"
          onClick={() => setShowSettings(!showSettings)}
          className="rounded-full bg-background/80 backdrop-blur-sm"
        >
          <Settings className="h-4 w-4" />
        </Button>
      </div>

      {showSettings && (
        <div className="fixed bottom-20 right-6 z-50 w-80 bg-background/95 backdrop-blur-sm border border-border rounded-lg p-6 space-y-4 max-h-[70vh] overflow-y-auto select-none">
          <h3 className="font-semibold text-lg mb-4">Animation Settings</h3>
          
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium flex items-center justify-between mb-2">
                <span>Brightness</span>
                <input
                  type="number"
                  value={params.brightness.toFixed(2)}
                  step="0.05"
                  onChange={(e) => setParams({ ...params, brightness: parseFloat(e.target.value) || 0 })}
                  className="w-20 px-2 py-1 text-xs rounded bg-background border border-border"
                />
              </label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={params.brightness}
                onChange={(e) => setParams({ ...params, brightness: parseFloat(e.target.value) })}
                className="w-full"
              />
            </div>

            <div>
              <label className="text-sm font-medium flex items-center justify-between mb-2">
                <span>Particle Count</span>
                <input
                  type="number"
                  value={params.particleCount}
                  onChange={(e) => setParams({ ...params, particleCount: parseInt(e.target.value) || 1 })}
                  className="w-20 px-2 py-1 text-xs rounded bg-background border border-border"
                />
              </label>
              <input
                type="range"
                min="100"
                max="50000"
                step="100"
                value={params.particleCount}
                onChange={(e) => setParams({ ...params, particleCount: parseInt(e.target.value) })}
                className="w-full"
              />
            </div>

            <div>
              <label className="text-sm font-medium flex items-center justify-between mb-2">
                <span>Speed</span>
                <input
                  type="number"
                  value={params.speed}
                  step="0.1"
                  onChange={(e) => setParams({ ...params, speed: parseFloat(e.target.value) || 0 })}
                  className="w-20 px-2 py-1 text-xs rounded bg-background border border-border"
                />
              </label>
              <input
                type="range"
                min="0"
                max="3"
                step="0.1"
                value={params.speed}
                onChange={(e) => setParams({ ...params, speed: parseFloat(e.target.value) })}
                className="w-full"
              />
            </div>

            <div>
              <label className="text-sm font-medium flex items-center justify-between mb-2">
                <span>Flow Complexity</span>
                <input
                  type="number"
                  value={params.noiseScale}
                  step="0.001"
                  onChange={(e) => setParams({ ...params, noiseScale: parseFloat(e.target.value) || 0 })}
                  className="w-20 px-2 py-1 text-xs rounded bg-background border border-border"
                />
              </label>
              <input
                type="range"
                min="0"
                max="0.5"
                step="0.001"
                value={params.noiseScale}
                onChange={(e) => setParams({ ...params, noiseScale: parseFloat(e.target.value) })}
                className="w-full"
              />
            </div>

            <div>
              <label className="text-sm font-medium flex items-center justify-between mb-2">
                <span>Trail Fade Speed</span>
                <input
                  type="number"
                  value={params.trailFadeSpeed}
                  onChange={(e) => setParams({ ...params, trailFadeSpeed: parseInt(e.target.value) || 1 })}
                  className="w-20 px-2 py-1 text-xs rounded bg-background border border-border"
                />
              </label>
              <input
                type="range"
                min="1"
                max="100"
                step="1"
                value={params.trailFadeSpeed}
                onChange={(e) => setParams({ ...params, trailFadeSpeed: parseInt(e.target.value) })}
                className="w-full"
              />
            </div>

            <div>
              <label className="text-sm font-medium flex items-center justify-between mb-2">
                <span>Foam Chance</span>
                <input
                  type="number"
                  value={params.foamChance}
                  step="0.01"
                  onChange={(e) => setParams({ ...params, foamChance: parseFloat(e.target.value) || 0 })}
                  className="w-20 px-2 py-1 text-xs rounded bg-background border border-border"
                />
              </label>
              <input
                type="range"
                min="0"
                max="0.5"
                step="0.01"
                value={params.foamChance}
                onChange={(e) => setParams({ ...params, foamChance: parseFloat(e.target.value) })}
                className="w-full"
              />
            </div>

            <div>
              <label className="text-sm font-medium flex items-center justify-between mb-2">
                <span>Foam Lifetime</span>
                <input
                  type="number"
                  value={params.foamLifetime}
                  onChange={(e) => setParams({ ...params, foamLifetime: parseInt(e.target.value) || 1 })}
                  className="w-20 px-2 py-1 text-xs rounded bg-background border border-border"
                />
              </label>
              <input
                type="range"
                min="10"
                max="100"
                step="5"
                value={params.foamLifetime}
                onChange={(e) => setParams({ ...params, foamLifetime: parseInt(e.target.value) })}
                className="w-full"
              />
            </div>

            <div>
              <label className="text-sm font-medium flex items-center justify-between mb-2">
                <span>Cursor Gravity</span>
                <input
                  type="number"
                  value={params.cursorGravity}
                  onChange={(e) => setParams({ ...params, cursorGravity: parseInt(e.target.value) || 0 })}
                  className="w-20 px-2 py-1 text-xs rounded bg-background border border-border"
                />
              </label>
              <input
                type="range"
                min="0"
                max="100"
                step="5"
                value={params.cursorGravity}
                onChange={(e) => setParams({ ...params, cursorGravity: parseInt(e.target.value) })}
                className="w-full"
              />
            </div>

            <div>
              <label className="text-sm font-medium flex items-center justify-between mb-2">
                <span>Cursor Radius</span>
                <input
                  type="number"
                  value={params.cursorRadius}
                  onChange={(e) => setParams({ ...params, cursorRadius: parseInt(e.target.value) || 1 })}
                  className="w-20 px-2 py-1 text-xs rounded bg-background border border-border"
                />
              </label>
              <input
                type="range"
                min="50"
                max="500"
                step="10"
                value={params.cursorRadius}
                onChange={(e) => setParams({ ...params, cursorRadius: parseInt(e.target.value) })}
                className="w-full"
              />
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => setParams(defaultParams)}
              className="w-full mt-4"
            >
              Reset to Default
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
