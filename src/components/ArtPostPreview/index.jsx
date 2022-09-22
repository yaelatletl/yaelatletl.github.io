import { h } from 'preact';
import Styles from './styles.module.scss';

function ArtPostPreview({ project }) {
	const { frontmatter } = project;
	return (
		<div className={Styles.card}>
			
			<div className={Styles.titleCard} style={`background-image:url(${frontmatter.img})`}>
				<div className="pa3">
					<div className={Styles.tags}>
						Tags:
						{frontmatter.tags.map((t) => (
							<div className={Styles.tag} data-tag={t}>
								{t}
							</div>
						))}
					</div>
					<a className={Styles.link} href={project.url}>
						<div className={Styles.popup}><p className={`${Styles.desc}mt0 mb2`}>{frontmatter.description}</p></div>
					</a>
				</div>
			</div>
			<h1 className={Styles.title}>{frontmatter.title}</h1>
		</div>
	);
}

export default ArtPostPreview;