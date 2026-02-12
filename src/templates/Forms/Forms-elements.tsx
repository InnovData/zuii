import { useState } from 'react';
import { Form } from '../../index';

/**
 * Template de démonstration pour le composant Form.
 * @returns {JSX.Element} La page de démo des forms.
 */
export const FormsElements = () => {
	const [value, setValue] = useState<string | string[]>(['1']);


	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		console.log(Object.fromEntries(formData.entries()));
		console.log(formData.getAll('selectMultiple[]'));
	}

	return (
		<div>
			<h2>Liste des inputs disponibles</h2>

			<form action="" onSubmit={handleSubmit}>
				<Form.Control type="text" placeholder="Enter text" name="text" />
				<Form.Control type="search" placeholder="Enter search" name="search" />
				<Form.Control type="email" placeholder="Enter email" name="email" />
				<Form.Control type="number" placeholder="Enter number" name="number" />
				<Form.Control type="file" placeholder="Enter file" name="file" />
				<Form.Control type="checkbox" placeholder="Enter checkbox" name="checkbox" />
				<Form.Control type="radio" placeholder="Enter radio" name="radio" />
				<Form.Select name="select" value={value} onChange={(value) => setValue(value)} options={[
					{
						text: 'Option 1',
						value: '1'
					},
					{
						text: 'Option 2',
						value: '2'
					},
					{
						text: 'Option 3',
						value: '3'
					}
				]} />
				<Form.Select name="selectMultiple[]" value={['1', '2']} multiple={true} options={[
					{
						text: 'Option 1',
						value: '1'
					},
					{
						text: 'Option 2',
						value: '2'
					},
					{
						text: 'Option 3',
						value: '3'
					}
				]} />
				<Form.Control type="submit" value="Submit" />
			</form>

		</div>
	);
};
