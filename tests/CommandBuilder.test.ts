import { CommandBuilder } from '../src/CommandBuilder';
import { ParamBuilder } from '../src/ParamBuilder';
import { StringUtils } from '../src/StringUtils';

test('getQuality when type is audio and quality is high', () => {

    const paramBuilder = new ParamBuilder();
    const stringUtils = new StringUtils();
    const commandBuilder = new CommandBuilder(paramBuilder, stringUtils);

    const result = commandBuilder.buildCommand('exampleURL','video','normal','');
    expect(result).toBe('yt-dlp.exe "exampleURL" -f "best[ext=mp4]/best" --cookies-from-browser firefox --restrict-filenames');
});
