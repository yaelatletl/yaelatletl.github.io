import { h } from 'preact';
import Styles from './styles.module.scss';

function PublicationPreview({ project }) {
	const { frontmatter } = project;
	return (
		<div className={Styles.card}>
			<i><h1 className={Styles.title}>{frontmatter.title}</h1></i>

                
			<div className="pa3">
                <div className={Styles.authors}>
					Authors:
					{frontmatter.author.map((t) => (
						<div className={Styles.author} data-tag={t}>
							{t}
						</div>
					))}
				</div>
				<p className={`${Styles.desc} mt0 mb2`}>{frontmatter.description}</p>
				<div className={Styles.tags}>
					Keywords:
					{frontmatter.tags.map((t) => (
						<div className={Styles.tag} data-tag={t}>
							{t}
						</div>
					))}
				</div>
				<a className={Styles.link} href={project.url}>
					<span className={Styles.linkInner}>Details</span>
				</a>
			</div>
		</div>
	);
}
export default PublicationPreview;