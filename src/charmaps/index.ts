import { boldMap } from './bold';
import { boldItalicMap } from './bolditalic';
import { italicMap } from './italic';
import { scriptMap } from './script';
import { normalMap } from './normal';
import { charmapType } from './type';

export type charMapMode =
	| 'bold'
	| 'italic'
	| 'bolditalic'
	| 'script'
	| 'normal';

export function charMap(mode: charMapMode, value: string) {
	let map: charmapType = {};
	if (mode === 'bold') {
		map = boldMap;
	} else if (mode === 'bolditalic') {
		map = boldItalicMap;
	} else if (mode === 'italic') {
		map = italicMap;
	} else if (mode === 'script') {
		map = scriptMap;
	} else {
		map = normalMap;
	}
	let newValue = value;
	Object.keys(map).forEach(ch => {
		newValue = newValue.replace(new RegExp(ch, 'g'), map[ch]);
	});
	return newValue;
}

export function removeNormalMaps(value: string) {
	let newValue = value;
	Object.keys(normalMap).forEach(ch => {
		newValue = newValue.replace(new RegExp(normalMap[ch], 'g'), ch);
	});
	return newValue;
}
