import styled from "styled-components/macro";

export const Page = styled.section``;

const PageHeader = styled.div`
  background: rgba(217, 217, 217, 0.9);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 30px;
  text-align: left;
`;

const PageTitle = styled.h2`
  color: #fb8500;
  font-weight: 600;
  font-size: 48px;
  text-transform: uppercase;
`;

const PageBody = styled.div`
  margin: 45px;
  flex: 1 0 auto;
  background: #d9d9d9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  font-family: "Noto Sans", sans-serif;
  color: #023047;
`;

const PageList = styled.ul`
  list-style: none;
  padding: 0;
`;

const PageListHeader = styled.h3`
  font-family: "Montserrat", sans-serif;
  color: #8ecae6;
  text-transform: uppercase;
  font-style: italic;
  background-color: #023047;
  width: 100%;
  font-weight: 200;
  height: 30px;
  line-height: 30px;
`;

const PageListItem = styled.li``;

Page.Header = PageHeader;
Page.Title = PageTitle;
Page.Body = PageBody;
Page.List = PageList;
Page.ListHeader = PageListHeader;
Page.ListItem = PageListItem;
