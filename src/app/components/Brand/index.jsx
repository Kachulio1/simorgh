import React from 'react';
import styled from 'styled-components';
import { boolean } from 'prop-types';
import {
  C_POSTBOX,
  C_WHITE,
  GEL_SPACING_DBL,
  GEL_SPACING_HLF,
} from '../../lib/constants/styles';
import {
  layoutGridWrapper,
  layoutGridItem,
  layoutGridItemFullWidth,
} from '../../lib/layoutGrid';

const StyledGridWrapper = styled.div`
  ${layoutGridWrapper};
  background-color: ${C_POSTBOX};
  height: 80px;
  width: 100%;
  padding: ${GEL_SPACING_DBL}px;
`;

const StyledGridItem = styled.div`
  ${fullWidth => (fullWidth ? layoutGridItemFullWidth : layoutGridItem)};
`;

const StyledLink = styled.a`
  :hover,
  :focus {
    text-decoration: none;
    border-bottom: ${GEL_SPACING_HLF}px solid ${C_WHITE};
    padding: ${GEL_SPACING_DBL}px 0;
  }
`;

const VisuallyHiddenText = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  top: 0;
`;

const Brand = ({ fullWidth }) => (
  <StyledGridWrapper>
    <StyledGridItem fullWidth={fullWidth}>
      <StyledLink href="https://www.bbc.co.uk/news">
        <svg
          width="280"
          height="40"
          viewBox="0 0 154 22"
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          aria-hidden="true"
        >
          <g fill="#fff" fillRule="evenodd">
            <path d="M72.882 14.678l-.372.227c-1.798 1.098-3.754 1.687-5.53 1.686-3.802-.014-6.306-2.267-6.316-5.548.004-3.207 2.619-5.581 6.22-5.59 1.834.002 3.495.476 5.469 1.557l.363.2V4.281l-.156-.06c-2.226-.88-3.95-1.271-5.652-1.27-2.632-.001-4.916.868-6.543 2.344-1.627 1.475-2.594 3.558-2.593 5.95.001 1.667.689 3.62 2.162 5.17 1.468 1.55 3.729 2.681 6.832 2.679h.01c2.573 0 4.357-.574 5.97-1.367l.136-.067v-2.982zm-18.607 7.261h23.219V.089H54.275v21.85zM45.223 14.576c.007-1.986-1.315-3.494-3.431-4.074.571-.292 1.022-.649 1.354-1.084.442-.583.653-1.298.651-2.13a3.801 3.801 0 0 0-1.265-2.849c-.866-.78-2.179-1.287-3.97-1.287h-4.95v15.737h5.809c2.072 0 3.527-.561 4.464-1.393a3.885 3.885 0 0 0 1.338-2.92zM27.52 21.939h23.219V.089H27.52v21.85z" />
            <path d="M42.334 14.262c-.002.52-.162 1.043-.628 1.451-.464.409-1.267.719-2.597.719h-2.678v-4.295h2.559c1.194 0 2.04.241 2.57.619.53.381.77.88.774 1.506M40.164 9.119c.499-.361.739-.868.743-1.63-.003-.524-.152-.972-.529-1.306-.377-.335-1.019-.573-2.053-.573h-1.894v4.07h1.3c1.125.001 1.932-.2 2.433-.561M18.47 14.576c.007-1.986-1.317-3.494-3.431-4.074.57-.292 1.021-.649 1.352-1.084.443-.583.654-1.298.653-2.13a3.802 3.802 0 0 0-1.266-2.849c-.864-.78-2.177-1.287-3.969-1.287H6.858v15.737h5.809c2.073 0 3.527-.561 4.463-1.393.937-.83 1.341-1.917 1.34-2.92zM.768 21.939h23.218V.089H.768v21.85z" />
            <path d="M13.41 9.119c.498-.361.74-.868.744-1.63-.002-.524-.152-.972-.529-1.306-.378-.335-1.019-.573-2.054-.573H9.678v4.07h1.299c1.125.001 1.932-.2 2.433-.561M14.808 12.756c-.532-.378-1.379-.619-2.571-.619H9.678v4.295h2.677c1.331 0 2.133-.31 2.599-.719.464-.408.624-.931.627-1.451-.006-.626-.244-1.125-.773-1.506M101.81 3.149h2.15v15.785h-1.95L91.46 6.777v12.157h-2.125V3.149h1.831l10.644 12.26V3.149M108.03 3.149h8.95V5.16h-6.69v4.814h6.46v2.023h-6.46V16.9h6.9v2.011h-9.16V3.149M141.09 3.149h2.26l-6.38 15.852h-.5l-5.16-12.835-5.22 12.835h-.48l-6.36-15.852h2.27l4.35 10.881 4.38-10.881h2.14l4.4 10.881 4.3-10.881M149.47 12.32l-1.718-1.043c-1.077-.658-1.843-1.305-2.299-1.942-.455-.636-.683-1.369-.683-2.197 0-1.244.431-2.253 1.293-3.028.863-.776 1.983-1.164 3.361-1.164 1.319 0 2.528.37 3.628 1.11v2.565c-1.137-1.094-2.362-1.642-3.673-1.642-.738 0-1.344.171-1.819.513-.474.341-.712.778-.712 1.311 0 .472.175.915.525 1.328.349.413.912.846 1.686 1.3l1.726 1.021c1.925 1.15 2.888 2.614 2.888 4.391 0 1.266-.424 2.294-1.271 3.085s-1.949 1.186-3.305 1.186c-1.559 0-2.979-.479-4.26-1.438v-2.869c1.221 1.546 2.633 2.318 4.237 2.318.709 0 1.298-.196 1.769-.59.47-.394.706-.888.706-1.481 0-.961-.694-1.872-2.079-2.734" />
          </g>
        </svg>
        <VisuallyHiddenText>BBC News</VisuallyHiddenText>
      </StyledLink>
    </StyledGridItem>
  </StyledGridWrapper>
);

Brand.defaultProps = {
  fullWidth: false,
};

Brand.propTypes = {
  fullWidth: boolean,
};

export default Brand;
