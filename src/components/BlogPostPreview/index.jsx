import { h } from 'preact';
import Styles from './styles.module.scss';

function BlogPostPreview({ project }) {
	const { frontmatter } = project;
	return (
		
		<div className={Styles.card}>
			<div className={Styles.grid}>
				<div className='section1' style={`background-image:url(${frontmatter.img})`}>
				</div>
				<div className='section2'>
						<i><h1 className={Styles.title}>{frontmatter.title}</h1></i>
							<div className="pa3">
								<div className={Styles.authors}>
									By:
									{frontmatter.author.map((t) => (
										<div className={Styles.author} data-tag={t}>
											{t}
										</div>
									))}
								</div>

								<p className={`${Styles.desc} mt0 mb2`}>{frontmatter.description}</p>
								<div className={Styles.tags}>
									Tags:
									{frontmatter.tags.map((t) => (
										<div className={Styles.tag} data-tag={t}>
											{t}
										</div>
									))}
								</div>
							<a className={Styles.link} href={project.url}>
								<span className={Styles.linkInner}>Read More</span>
							</a>
					</div>
				</div>
				
			
			</div>
		</div>
	);
}

export default BlogPostPreview;