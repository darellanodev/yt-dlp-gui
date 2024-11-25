import { ParamBuilder } from '../src/ParamBuilder';

test('getQuality when type is audio and quality is high', () => {
    const paramBuilder = new ParamBuilder();
    const result = paramBuilder.quality('audio', 'high');
    expect(result).toBe('--audio-quality 0');
});

test('getQuality when type is video and quality is high', () => {
    const paramBuilder = new ParamBuilder();
    const result = paramBuilder.quality('video', 'high');
    expect(result).toBe('"bestvideo+bestaudio[ext=m4a]"');
})

test('getQuality when type is video and quality is normal', () => {
    const paramBuilder = new ParamBuilder();
    const result = paramBuilder.quality('video', 'normal');
    expect(result).toBe('"best[ext=mp4]/best"');
})

test('getQuality when type is audio and quality is normal', () => {
    const paramBuilder = new ParamBuilder();
    const result = paramBuilder.quality('audio', 'normal');
    expect(result).toBe('-f bestaudio');
})

test('getCookiesFromBrowser', () => {
    const paramBuilder = new ParamBuilder();
    const result = paramBuilder.cookiesFromBrowser();
    expect(result).toBe('--cookies-from-browser firefox');
})

test('getRestrictFilenames', () => {
    const paramBuilder = new ParamBuilder();
    const result = paramBuilder.restrictFilenames();
    expect(result).toBe('--restrict-filenames');
})

test('getOutputFolder', () => {
    const paramBuilder = new ParamBuilder();
    const result = paramBuilder.outputFolder('folder1');
    expect(result).toBe('-o "folder1/%%(title)s.%%(ext)s"');
})

test('getAudioFormat', () => {
    const paramBuilder = new ParamBuilder();
    const result = paramBuilder.audioFormat();
    expect(result).toBe('-x --audio-format mp3');
})