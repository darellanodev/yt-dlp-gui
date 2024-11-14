import { ParamBuilder } from '../src/ParamBuilder';

test('getQuality when type is audio and quality is high', () => {
    const paramBuilder = new ParamBuilder();
    const result = paramBuilder.getQuality('audio', 'high');
    expect(result).toBe('--audio-quality 0');
});

test('getQuality when type is video and quality is high', () => {
    const paramBuilder = new ParamBuilder();
    const result = paramBuilder.getQuality('video', 'high');
    expect(result).toBe('bestvideo+bestaudio[ext=m4a]');
})

test('getQuality when type is video and quality is normal', () => {
    const paramBuilder = new ParamBuilder();
    const result = paramBuilder.getQuality('video', 'normal');
    expect(result).toBe('best[ext=mp4]/best');
})

test('getQuality when type is audio and quality is normal', () => {
    const paramBuilder = new ParamBuilder();
    const result = paramBuilder.getQuality('audio', 'normal');
    expect(result).toBe('');
})

test('getCookiesFromBrowser', () => {
    const paramBuilder = new ParamBuilder();
    const result = paramBuilder.getCookiesFromBrowser();
    expect(result).toBe('--cookies-from-browser firefox');
})