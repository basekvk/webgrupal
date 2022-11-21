import PropTypes from 'prop-types';
import Link from 'next/link';
import { Col } from 'react-bootstrap';
import Image from 'next/image';

function ProjectGalleryItem({ project }) {
    const imagePath = `/images/projects/${project?.slug}/${project?.image}`;
    const linkPath = `/services/${project?.slug}`;

    return (
        <Col lg={{ span: 4 }} md={{ span: 6 }}>
            <div className="project-item">
                <Link href={linkPath}>
                    <a className="project-img">
                        <Image
                        width={405}
                        height={474}
                         src={imagePath}
                        alt={project?.title} />
                    </a>
                </Link>
            </div>
        </Col>
    );
}

ProjectGalleryItem.propTypes = {
    project: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectGalleryItem;
