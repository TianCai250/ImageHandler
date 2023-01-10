interface Options {
    target: HTMLElement | null;
    width: number | null;
    height: number | null;
}
interface domOptions {
    element: HTMLElement;
    width?: number;
    height?: number;
    gap: number;
    scale: number;
    elSize: number;
}
declare class ImagesHandler {
    private imgSrc;
    private target;
    private width;
    private height;
    private canvas;
    private context;
    private image;
    constructor(imgSrc: string, options: Options);
    blackWhite(): Promise<unknown>;
    downloadImg(imgName?: string): void;
    paintByElement(container: HTMLElement, options: domOptions): void;
}

export { ImagesHandler as default };
