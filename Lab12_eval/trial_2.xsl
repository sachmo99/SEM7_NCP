<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

  <xsl:template match="/">
  <!DOCTYPE html>  
  <HTML>

      <HEAD><TITLE>Purchase Order Database</TITLE></HEAD>
      <BODY>
          <h1>Purchase Order Database</h1>
          <h2>Date:<xsl:value-of select="Date"></xsl:value-of></h2>
          <xsl:apply-templates />

        
      </BODY>
    </HTML>
  </xsl:template>
  <xsl:template match="BillingShipping">
      <h2>Shipping Details</h2>
      <p>Customer Name: <xsl:value-of select="CustomerName"></xsl:value-of></p>
      <p>Address: <xsl:value-of select="Address"></xsl:value-of></p>
      <p>PlaceOfShipping: <xsl:value-of select="PlaceOfShipping"></xsl:value-of></p>
      <p>Billing: <xsl:value-of select="Billing"></xsl:value-of></p>
  </xsl:template>
  <xsl:template match="Items">
    <h1>Cart</h1>
    <table border="1">
        <tr>
            <th>id</th>
            <th>Name</th>
            <th>quantity</th>
            <th>Price</th>
        </tr>
        <xsl:for-each select="Item">
            <xsl:if test="Quantity &gt; 30 ">
 
            <tr style="backgound-color:#33FF36">
                <td ><xsl:value-of select="ProductId"/></td>
                <td style="backgound-color:#FF0000"><xsl:value-of select="ProductName"/></td>
                <td style="backgound-color:#FF0000"><xsl:value-of select="Quantity"/></td>
                <td style="backgound-color:#FF0000"><xsl:value-of select="Price"/></td>
            </tr>
        </xsl:if>
        <xsl:if test="Quantity &lt;= 30 ">
 
            <tr>
                <td><xsl:value-of select="ProductId"/></td>
                <td><xsl:value-of select="ProductName"/></td>
                <td><xsl:value-of select="Quantity"/></td>
                <td><xsl:value-of select="Price"/></td>
            </tr>
        </xsl:if>
        
        </xsl:for-each>
    </table>
  </xsl:template>

  
</xsl:stylesheet>