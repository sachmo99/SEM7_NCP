<?xml version="1.0" ?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="text"></xsl:output>
<xsl:template match="/">
<html>
    <body>
        <h1>BANK</h1>
        <xsl:apply-templates />
		
        
    </body>
</html>
</xsl:template>
<xsl:template match="accounts">
    <h2>Savings Accounts</h2>
	<br/>
	<table border="1">
       <tr>
           <th>id</th>
           <th>interest</th>
           <th>balance</th>
       </tr>
       <xsl:for-each select="savings_accounts/savings_account">

           <tr>
               <td><xsl:value-of select="@id"/></td>
               <td><xsl:value-of select="@interest"/></td>
               <td><xsl:value-of select="balance"/></td>
           </tr>
       </xsl:for-each>
   </table>
    
</xsl:template>
<xsl:template match="savings_accounts">
   
</xsl:template>

</xsl:stylesheet>