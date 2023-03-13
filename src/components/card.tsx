import React from 'react';
import type { PageProps } from 'gatsby'
import { Link } from 'gatsby'
import type { NodeType } from '../pages/blog/index'


const Card = ({card_node}:PageProps<NodeType>) => {
  return (
    <article key={card_node.id}>
        <div className = "Card">

          <h2 className = "CardTitle">

              <Link to={`/${card_node.frontmatter.folder}/${card_node.frontmatter.slug}`}>
                  {card_node.frontmatter.title}
              </Link>
          </h2>
          
          <p className = "CardDate">Posted: {card_node.frontmatter.date}</p>
        </div>
    </article>
  );
};

export default Card;