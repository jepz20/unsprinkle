import React from "react";
import styled from "styled-components/macro";

const PhotoGridItem = ({ id, src, alt, tags }) => {
  const [srcBase] = src.split(".");
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <picture>
          <source
            type="image/avif"
            srcSet={`${srcBase}.avif 1x,
            ${srcBase}@2x.avif 2x,
            ${srcBase}@3x.avif 3x
            `}
          />
          <source
            type="image/jpeg"
            srcSet={`${srcBase}.jpg 1x,
            ${srcBase}@2x.jpg 2x,
            ${srcBase}@3x.jpg 3x"
            `}
          />
          <Image alt={alt} src={src} />
        </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
  object-fit: cover;
  object-position: 50% 50%;
`;

const Tags = styled.ul`
  padding: 4px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Tag = styled.li`
  display: inline;
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);

  &:not(:last-child) {
    margin-right: 8px;
  }
`;

export default PhotoGridItem;
