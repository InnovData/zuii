import { colord, extend } from 'colord';
import mixPlugin from 'colord/plugins/mix';

extend([mixPlugin]);

/**
 * Transformations Style Dictionary
 */
export const transforms = {
	/**
	 * Transformation de nom en kebab-case
	 */
	'name/kebab': {
		type: 'name',
		transform: (token) => token.path.join('-').toLowerCase()
	},
	/**
	 * Transformation de nom en CONSTANT_CASE
	 */
	'name/constant': {
		type: 'name',
		transform: (token) => token.path.join('_').toUpperCase().replace(/-/g, '_')
	},
	/**
	 * Transformation de modification de couleurs (darken, lighten, alpha, mix)
	 */
	'color/modify': {
		type: 'value',
		transitive: true,
		matcher: (token) => {
			// token.path est un tableau comme ['color', 'gray', '100'] ou ['brands', 'primary']
			const isColor = token.path[0] === 'color' || token.path[0] === 'brands';
			const hasModify = !!token.modify;
			return isColor && hasModify;
		},
		transform: (token) => {
			let color = colord(token.value);
			if (token.modify && Array.isArray(token.modify)) {
				token.modify.forEach(mod => {
					if (mod.type === 'darken') color = color.darken(mod.amount);
					else if (mod.type === 'lighten') color = color.lighten(mod.amount);
					else if (mod.type === 'alpha') color = color.alpha(mod.amount);
					else if (mod.type === 'mix') color = color.mix(mod.color, mod.amount);
				});
			}
			return color.toHex();
		}
	}
};
