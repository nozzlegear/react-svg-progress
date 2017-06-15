import * as React from 'react';
import * as ReactDOM from 'react-dom';

export interface IProps {
    color?: string;
    size?: number | string;
    margin?: string;
    strokeWidth?: number;
    key?: React.Key;
    ref?: React.Ref<any>;
}

export class Dialog extends React.Component<IProps, any>
{
    constructor(props: IProps, context) {
        super(props, context);
    }

    static propTypes: Record<keyof IProps, React.Requireable<any>> = {
        key: React.PropTypes.any,
        ref: React.PropTypes.any,
        color: React.PropTypes.string,
        size: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
        margin: React.PropTypes.string,
        strokeWidth: React.PropTypes.number,
    };

    private svg_style = {
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
     * Creates a unique guid. Based off of https://stackoverflow.com/a/2117523.
     */
    private createGuid(): string {
        const input = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';

        return input.replace(/[xy]/g, c => {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);

            return v.toString(16);
        });
    }

    private getCircleStyle(id: string) {
        const style = {
            strokeDasharray: '1,200',
            strokeDashoffset: '0',
            animation: `dash 1.5s ease-in-out infinite, color-${id} 6s ease-in-out infinite`,
            strokeLinecap: 'round'
        };

        return style;
    };

    private getStyle(size: number | string = 16) {
        const sizeValue = typeof (size) === "number" ? `${size}px` : size;
        const loading_style = {
            position: 'relative',
            width: size,
            height: size,
        };

        return loading_style;
    }

    private getAnimation(id: string, color: string = `#00bcd4`) {
        const animation = `
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

        return animation;
    }


    render() {
        const { size, color, margin, strokeWidth } = this.props;
        const id = this.createGuid();
        const style = this.getStyle(size);
        const circleStyle = this.getCircleStyle(id);
        const animation = this.getAnimation(id, color);

        return (
            <div className={`svg react-svg-progress`} style={{ ...style, display: "inline-block", margin }}>
                <style>{animation}</style>
                <svg style={this.svg_style} viewBox="25 25 50 50">
                    <circle style={circleStyle} cx="50" cy="50" r="20" fill="none" strokeWidth={strokeWidth || 5} strokeMiterlimit="10" />
                </svg>
            </div>
        );
    }
}

export default Dialog;
