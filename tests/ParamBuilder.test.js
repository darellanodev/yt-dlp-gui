import { ParamBuilder } from '../src/ParamBuilder';

test('getQuality when type is audio and quality is high', () => {
    const paramBuilder = new ParamBuilder();
    const result = paramBuilder.getQuality('audio', 'high');
    expect(result).toBe('--audio-quality 0');
});