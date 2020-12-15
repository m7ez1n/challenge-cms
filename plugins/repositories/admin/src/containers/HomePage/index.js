
import React, { memo } from 'react';
import styled from 'styled-components';

import { Header } from '@buffetjs/custom';
import { Table } from '@buffetjs/core';

const Wrapper = styled.div`
  padding: 18px 30px;

  p {
    margin-top: 1rem;
  }
`;

const HomePage = () => {
  const headers = [
    {
      name: 'NAME',
      value: 'name'
    },
    {
      name: 'DESCRIPTION',
      value: 'description'
    },
    {
      name: 'URL',
      value: 'html_url'
    }
  ];

  const rows = [
    {
      name: 'CMS',
      description: 'Repository where the code for the cms used in the challenge is stored.',
      html_url: 'https://github.com/m7he4rt/challenge-cms',
    },
    {
      name: 'Frontend',
      description: 'Repository where the code for the frontend-web used in the challenge is stored.',
      html_url: 'https://github.com/m7he4rt/challenge-web',
    },
  ];

  return (
    <Wrapper>
      <Header
        title={{ label: 'Sallve Challenge Repositories' }}
        content="A list of our sallve challenge repositories."
      />
      <Table
        headers={headers}
        rows={rows}
      />
    </Wrapper>
  );
};

export default memo(HomePage);
