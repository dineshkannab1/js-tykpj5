import Table from 'react-bootstrap/Table';
import TypingAnimation from './TypingAnimation';

function BasicExample() {
  const table: React.CSSProperties = {
		fontWeight: 'bold',
		fontSize: 50,
		position: 'absolute',
		width: '100%',
    marginTop:10,
    padding:30
	};
  const tableBody: React.CSSProperties = {
		marginTop:50,
    background:'black',
    margin:50
	};
  const tableRow: React.CSSProperties = {
    padding:10,
    lineHeight:3,
	};
  
  
  return (
    <div style={table}>
      <TypingAnimation/>
  <Table table-transparent  size="lg" >
      <tbody  style={tableBody}>
        <tr style={tableRow}>
          <td colSpan={2}>Invoice date:</td>
          <td>10/10/2023</td>
        </tr>
        <tr style={tableRow}>
          <td colSpan={2}>Due on:</td>
          <td>12/10/2023</td>
        </tr>
        <tr style={tableRow}>
          <td colSpan={2}>Billing cycle Start date:</td>
          <td>11/10/2023</td>
        </tr>
        <tr style={tableRow}>
          <td colSpan={2}>Billing cycle end date:</td>
          <td>11/10/2023</td>
        </tr>
      </tbody>
    </Table>
    </div>
   
  );
}

export default BasicExample;