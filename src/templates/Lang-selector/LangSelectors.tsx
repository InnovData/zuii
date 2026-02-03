import { useState } from 'react';
import { LangSelector, Group } from '../../index';

/**
 * Template de démonstration pour le sélecteur de langue.
 * @returns {JSX.Element} Le composant de démonstration.
 */
export const LangSelectors = () => {
	const [lang, setLang] = useState('fr');

	const languages = [
		{ code: 'fr', label: 'Français', flag: 'fr' },
		{ code: 'en', label: 'English', flag: 'gb' },
		{ code: 'de', label: 'Deutsch', flag: 'de' },
		{ code: 'es', label: 'Español', flag: 'es' }
	];

	return (
		<div className="flex flex-col gap-8">
			<section>
				<h2 className="mb-4 text-xl font-bold">Sélecteur de Langue Standard</h2>
				<p className="mb-4 text-gray-600">
					Un composant de sélection de langue utilisant Tom Select (via la version JS) ou React directement.
				</p>

				<Group>
					<div style={{ width: '250px' }}>
						<LangSelector
							languages={languages}
							currentLanguage={lang}
							onChange={setLang}
						/>
					</div>
				</Group>

				<div className="mt-4">
					Langue sélectionnée : <strong>{lang}</strong>
				</div>
			</section>

			<section>
				<h2 className="mb-4 text-xl font-bold">Utilisation dans un formulaire</h2>
				<p className="mb-4 text-gray-600">
					Le composant s'intègre parfaitement dans des layouts complexes.
				</p>
				<Group>
					<div className="flex items-center gap-4 p-4 border rounded-lg bg-light">
						<span>Changer la langue du projet :</span>
						<div style={{ width: '200px' }}>
							<LangSelector
								languages={languages.slice(0, 2)}
								currentLanguage={lang}
								onChange={setLang}
							/>
						</div>
					</div>
				</Group>
			</section>
		</div>
	);
};
