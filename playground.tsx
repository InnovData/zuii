import React from 'react';
import ReactDOM from 'react-dom/client';
import { ZButton } from './dist';


ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<div style={{ padding: '20px' }}>
			<h1>Zuii Playground (React)</h1>
			<ZButton label="Mon Bouton React" variant="primary" onClick={() => alert('Cliqué hello !')} />
		</div>
	</React.StrictMode>
);
