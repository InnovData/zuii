import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button, Icon } from '../src';


ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<div style={{ padding: '20px' }}>
			<h1>Zuii Playground (React)</h1>
			<Button variant="primary" >
				Hello
			</Button>
			<Button variant="secondary" onClick={() => alert('Cliqué hello !')} icon="icon-house" >
				Hello
			</Button>
			<Button variant="success" onClick={() => alert('Cliqué hello !')} icon="icon-house" >
				Hello
			</Button>
			<Button variant="danger" onClick={() => alert('Cliqué hello !')} >
				Hello
			</Button>
			<Button variant="warning" onClick={() => alert('Cliqué hello !')} >
				Hello
			</Button>
			<Button variant="info" onClick={() => alert('Cliqué hello !')} >
				Hello
			</Button>
			<Button variant="light" onClick={() => alert('Cliqué hello !')} >
				Hello
			</Button>
			<Button variant="dark" onClick={() => alert('Cliqué hello !')} >
				Hello
			</Button>
			<Button variant="link" onClick={() => alert('Cliqué hello !')} >
				Hello
			</Button>
		</div>
	</React.StrictMode>
);
