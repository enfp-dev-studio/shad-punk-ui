import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

/**
 * 사이즈별 코너 크기 (픽셀)
 */
const sizeMap = {
    sm: 6,
    md: 10,
    lg: 14,
    xl: 18,
}

/**
 * MechFrame Variants (cva)
 */
const mechFrameVariants = cva(
    "relative inline-flex",
    {
        variants: {
            corner: {
                all: "",
                none: "",
                t: "",
                b: "",
                l: "",
                r: "",
                tl: "",
                tr: "",
                bl: "",
                br: "",
                "tl-br": "",
                "tr-bl": "",
            },
            size: {
                sm: "",
                md: "",
                lg: "",
                xl: "",
            },
        },
        defaultVariants: {
            corner: "all",
            size: "md",
        },
    }
)

interface MechFrameProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof mechFrameVariants> {
    /** 보더 색상 (CSS 변수 또는 색상값) */
    borderColor?: string
    /** 보더 두께 */
    borderWidth?: number
    /** 애니메이션 활성화 */
    animated?: boolean
    children: React.ReactNode
}

/**
 * 코너 파싱 함수
 */
function parseCorners(corner: string): { tl: boolean; tr: boolean; bl: boolean; br: boolean } {
    if (corner === "all") return { tl: true, tr: true, bl: true, br: true }
    if (corner === "none") return { tl: false, tr: false, bl: false, br: false }
    if (corner === "t") return { tl: true, tr: true, bl: false, br: false }
    if (corner === "b") return { tl: false, tr: false, bl: true, br: true }
    if (corner === "l") return { tl: true, tr: false, bl: true, br: false }
    if (corner === "r") return { tl: false, tr: true, bl: false, br: true }

    const result = { tl: false, tr: false, bl: false, br: false }
    if (corner.includes("tl")) result.tl = true
    if (corner.includes("tr")) result.tr = true
    if (corner.includes("bl")) result.bl = true
    if (corner.includes("br")) result.br = true
    return result
}

/**
 * clip-path polygon 생성
 */
function generateClipPath(cs: number, corners: { tl: boolean; tr: boolean; bl: boolean; br: boolean }): string {
    const tl = corners.tl ? `${cs}px 0, 0 ${cs}px` : "0 0"
    const tr = corners.tr ? `calc(100% - ${cs}px) 0, 100% ${cs}px` : "100% 0"
    const br = corners.br ? `100% calc(100% - ${cs}px), calc(100% - ${cs}px) 100%` : "100% 100%"
    const bl = corners.bl ? `${cs}px 100%, 0 calc(100% - ${cs}px)` : "0 100%"

    return `polygon(${tl}, ${tr}, ${br}, ${bl})`
}

/**
 * CSS 기반 메카닉 프레임 컴포넌트
 * - clip-path로 45도 코너 (픽셀 기반, 늘어지지 않음)
 * - pseudo-element로 보더 효과
 * - CSS 애니메이션 지원
 */
function MechFrame({
    corner = "all",
    size = "md",
    borderColor = "hsl(var(--primary))",
    borderWidth = 1,
    animated = false,
    className,
    children,
    ...props
}: MechFrameProps) {
    const cs = sizeMap[size || "md"]
    const corners = parseCorners(corner || "all")
    const clipPath = generateClipPath(cs, corners)

    return (
        <div
            className={cn(
                mechFrameVariants({ corner, size }),
                animated && "mech-frame-animated",
                className
            )}
            style={{
                clipPath,
                ["--mech-border-color" as string]: borderColor,
                ["--mech-border-width" as string]: `${borderWidth}px`,
                ["--mech-corner-size" as string]: `${cs}px`,
            }}
            {...props}
        >
            {/* 보더 레이어 (pseudo-element 대신 실제 요소로) */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    clipPath,
                    background: `
            linear-gradient(${borderColor}, ${borderColor}) top left / 100% var(--mech-border-width) no-repeat,
            linear-gradient(${borderColor}, ${borderColor}) top right / var(--mech-border-width) 100% no-repeat,
            linear-gradient(${borderColor}, ${borderColor}) bottom left / 100% var(--mech-border-width) no-repeat,
            linear-gradient(${borderColor}, ${borderColor}) bottom left / var(--mech-border-width) 100% no-repeat
          `,
                }}
            />

            {/* 코너 브래킷 장식 */}
            {corners.tl && (
                <div
                    className="absolute top-0 left-0 pointer-events-none"
                    style={{
                        width: cs * 2.5,
                        height: cs * 2.5,
                        borderLeft: `${borderWidth}px solid ${borderColor}`,
                        borderTop: `${borderWidth}px solid ${borderColor}`,
                        clipPath: `polygon(0 100%, 0 ${cs}px, ${cs}px 0, 100% 0, 100% ${borderWidth}px, ${cs + borderWidth}px ${borderWidth}px, ${borderWidth}px ${cs + borderWidth}px, ${borderWidth}px 100%)`,
                    }}
                />
            )}
            {corners.tr && (
                <div
                    className="absolute top-0 right-0 pointer-events-none"
                    style={{
                        width: cs * 2.5,
                        height: cs * 2.5,
                        borderRight: `${borderWidth}px solid ${borderColor}`,
                        borderTop: `${borderWidth}px solid ${borderColor}`,
                        clipPath: `polygon(0 0, calc(100% - ${cs}px) 0, 100% ${cs}px, 100% 100%, calc(100% - ${borderWidth}px) 100%, calc(100% - ${borderWidth}px) ${cs + borderWidth}px, calc(100% - ${cs + borderWidth}px) ${borderWidth}px, 0 ${borderWidth}px)`,
                    }}
                />
            )}
            {corners.bl && (
                <div
                    className="absolute bottom-0 left-0 pointer-events-none"
                    style={{
                        width: cs * 2.5,
                        height: cs * 2.5,
                        borderLeft: `${borderWidth}px solid ${borderColor}`,
                        borderBottom: `${borderWidth}px solid ${borderColor}`,
                        clipPath: `polygon(0 0, ${borderWidth}px 0, ${borderWidth}px calc(100% - ${cs + borderWidth}px), ${cs + borderWidth}px calc(100% - ${borderWidth}px), 100% calc(100% - ${borderWidth}px), 100% 100%, ${cs}px 100%, 0 calc(100% - ${cs}px))`,
                    }}
                />
            )}
            {corners.br && (
                <div
                    className="absolute bottom-0 right-0 pointer-events-none"
                    style={{
                        width: cs * 2.5,
                        height: cs * 2.5,
                        borderRight: `${borderWidth}px solid ${borderColor}`,
                        borderBottom: `${borderWidth}px solid ${borderColor}`,
                        clipPath: `polygon(0 calc(100% - ${borderWidth}px), calc(100% - ${cs + borderWidth}px) calc(100% - ${borderWidth}px), calc(100% - ${borderWidth}px) calc(100% - ${cs + borderWidth}px), calc(100% - ${borderWidth}px) 0, 100% 0, 100% calc(100% - ${cs}px), calc(100% - ${cs}px) 100%, 0 100%)`,
                    }}
                />
            )}

            {/* 콘텐츠 */}
            <div className="relative z-10 px-4 py-2">
                {children}
            </div>
        </div>
    )
}

export { MechFrame, mechFrameVariants }
