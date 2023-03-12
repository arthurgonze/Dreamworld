import React from 'react';
import type { PageProps } from 'gatsby'
import { Link } from 'gatsby'
import type { NodeType } from '../pages/blog/index'
import { GatsbyImage, getImage} from 'gatsby-plugin-image'

const Card = ({card_node}:PageProps<NodeType>) => {
  const cardImage = getImage(card_node.frontmatter.thumbnail_image)
  return (
    <article key={card_node.id}>
        <div className = "BlogPostCard">
          {/* <GatsbyImage
              image={cardImage}
              alt={card_node.frontmatter.thumbnail_alt}
              className = "BlogPostThumbnailImage"
          /> */}

          <h2 className = "BlogPostTitle">
              <Link to={`/blog/${card_node.frontmatter.slug}`}>
                  {card_node.frontmatter.title}
              </Link>
          </h2>
          
          <p className = "BlogPostDate">Posted: {card_node.frontmatter.date}</p>
        </div>
    </article>
  );
};

export default Card;