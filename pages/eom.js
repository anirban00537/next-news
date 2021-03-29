const eom = ({ employee }) => {
  return (
    <div>
      <h4>{employee.name}</h4>
      <h4>{employee.position}</h4>
      <p>{employee.description}</p>
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const apiResponse = await fetch(
    "http://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth"
  );
  const response = await apiResponse.json();
  console.log(response);
  return {
    props: {
      employee: response,
    },
  };
};
export default eom;
