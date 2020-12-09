import java.io.File;
import java.io.IOException;

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

import com.codoid.products.exception.FilloException;
import com.codoid.products.fillo.Fillo;
import com.codoid.products.fillo.Recordset;

public class eval_1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Fillo fillo = new Fillo();
		try {
			com.codoid.products.fillo.Connection connection = fillo.getConnection("/home/sachmo/Documents/NCP_SEM7/Labs/Lab12_eval/Book1.xlsx");
			//String strQuery = "Select * from Sheet1";
			//Recordset recordset = connection.executeQuery(strQuery);
			DocumentBuilderFactory docBuilderFactory = DocumentBuilderFactory.newInstance();
			DocumentBuilder docBuilder =
					docBuilderFactory.newDocumentBuilder();
			Document doc = docBuilder.parse(new File("/home/sachmo/Documents/NCP_SEM7/Labs/Lab12_eval/trial_1.xml"));
			doc.getDocumentElement().normalize();
			System.out.println ("Root element of the doc is " +
			doc.getDocumentElement().getNodeName());
			NodeList listOfPersons = doc.getElementsByTagName("Item");
			System.out.println(listOfPersons.getLength());
			for(int s=0; s<listOfPersons.getLength(); s++){
				Node firstPersonNode = listOfPersons.item(s);
				if(firstPersonNode.getNodeType() == Node.ELEMENT_NODE){
				Element firstPersonElement = (Element)firstPersonNode;
				NodeList nameList =
				firstPersonElement.getElementsByTagName("ProductId");
				Element nameElement =(Element)nameList.item(0);
				NodeList textFNList = nameElement.getChildNodes();
				String name=((Node)textFNList.item(0)).getNodeValue().trim();
				NodeList emailList =
				firstPersonElement.getElementsByTagName("Quantity");
				Element emailElement =(Element)emailList.item(0);
				NodeList textLNList = emailElement.getChildNodes();
				String email= ((Node)textLNList.item(0)).getNodeValue().trim();
				int i=connection.executeUpdate("insert into Sheet1(ProductId,Quantity) values('"+name+"','"+email+"')");
				}
				}
			String strQuery = "Select * from Sheet1";
			Recordset recordset = connection.executeQuery(strQuery);
			
			while(recordset.next()){
				System.out.println("ProductId: "+recordset.getField("ProductId")+" Quantity: "+recordset.getField("Quantity"));
				}
				recordset.close();
				connection.close();
			
			
			
			
			
		} catch (FilloException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ParserConfigurationException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SAXException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
	}

}

