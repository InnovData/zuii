import React, { useEffect, useRef } from 'react';
import { renderButton, ButtonConfig } from '../js/Button';
import '../style/button.scss';

export const ZButton: React.FC<ButtonConfig> = (props) => {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (containerRef.current) {
			containerRef.current.innerHTML = ''; // Nettoyage
			const btn = renderButton(props);
			containerRef.current.appendChild(btn);
		}
	}, [props]);

	return <div ref={containerRef} style={{ display: 'contents' }} />;
};
