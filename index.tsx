import * as React from 'react';

export type Props = {
    color?: string;
    size?: number | string;
    margin?: string;
    strokeWidth?: number;
    key?: React.Key;
    ref?: React.Ref<any>;
}

export const SVG_STYLE: React.CSSProperties = {
    animation: 'rotate 2s linear infinite',
    height: '100%',
    transformOrigin: 'center center',
    width: '100%',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 'auto'
};

/**
 * Creates a unique uuid. Based off of https://stackoverflow.com/a/2117523.
 */
function createUuid(): string {
    const input = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';

    return input.replace(/[xy]/g, c => {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);

        return v.toString(16);
    });
}

function getCircleStyle(id: string): Record<string, string> {
    return {
        strokeDasharray: '1,200',
        strokeDashoffset: '0',
        animation: `dash 1.5s ease-in-out infinite, color-${id} 6s ease-in-out infinite`,
        strokeLinecap: 'round'
    };
}

function getContainerStyle(size: number | string = 16): Record<string, string | number> {
    const sizeValue = typeof (size) === "number" ? `${size}px` : size;
    return {
        position: 'relative',
        width: sizeValue,
        height: sizeValue,
    };
}

function getAnimationKeyframes(id: string, color: string = `#00bcd4`): string {
    return `
        @keyframes rotate {
            100% {
                transform: rotate(360deg);
            }
        }
        @keyframes dash {
            0% {
                stroke-dasharray: 1,200;
                stroke-dashoffset: 0;
            }
            50% {
                stroke-dasharray: 89,200;
                stroke-dashoffset: -35px;
            }
            100% {
                stroke-dasharray: 89,200;
                stroke-dashoffset: -124px;
            }
        }
        @keyframes color-${id} {
            100%, 0% {
                stroke: ${color};
            }
            40% {
                stroke: ${color};
            }
            66% {
                stroke: ${color};
            }
            80%, 90% {
                stroke: ${color};
            }
        }`;
}


export function CircularProgress(this: unknown, props: Props): React.ReactElement {
    const { size, color, margin, strokeWidth } = props;
    const id = React.useMemo(() => createUuid(), []);
    const divStyle = getContainerStyle(size);
    const circleStyle = getCircleStyle(id);
    const animationKeyframes = getAnimationKeyframes(id, color);

    return (
        <div className={"svg react-svg-progress"} style={{ ...divStyle, display: "inline-block", margin }}>
            <style>{animationKeyframes}</style>
            <svg style={SVG_STYLE} viewBox="25 25 50 50">
                <circle style={circleStyle} cx="50" cy="50" r="20" fill="none" strokeWidth={strokeWidth || 5} strokeMiterlimit="10" />
            </svg>
        </div>
    );
}

export default CircularProgress;
