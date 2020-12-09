<?xml version="1.0" ?>
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="text"></xsl:output>
<xsl:template match="/bank">
<html>
    <body>
        <h1>BANK</h1>
        <xsl:apply-templates />
		
        
    </body>
</html>
</xsl:template>
<xsl:template match="accounts">
    <h2>Savings Accounts</h2>
    <xsl:apply-templates select="savings_accounts"/>
    <h2>Checking Accounts</h2>
    <xsl:apply-templates select="checking_accounts"/>
</xsl:template>
<xsl:template match="savings_accounts">
   <table border="1">
       <tr>
           <th bgcolor="#9acd32">id</th>
           <th bgcolor="#9acd32">interest</th>
           <th bgcolor="#9acd32">balance</th>
       </tr>
       <xsl:for-each select="savings_account">

           <tr>
               <td><xsl:value-of select="@id"/></td>
               <td><xsl:value-of select="@interest"/></td>
               <td><xsl:value-of select="balance"/></td>
           </tr>
       </xsl:for-each>
   </table>
</xsl:template>
<xsl:template match="checking_accounts">
   <table border="1">
       <tr>
           <th bgcolor="#9acd32">id</th>
           
           <th bgcolor="#9acd32">balance</th>
       </tr>
       <xsl:for-each select="checking_account">

           <tr>
               <td><xsl:value-of select="@id"/></td>
               
               <td><xsl:value-of select="balance"/></td>
           </tr>
       </xsl:for-each>
   </table>
</xsl:template>
<xsl:template match="customers">
    <h2>Customers</h2>
    <table border="1">
        <tr>
            <th bgcolor="#9acd32">id</th>
            <th bgcolor="#9acd32">Name</th>
            <th bgcolor="#9acd32">Address</th>
        </tr>
        <xsl:for-each select="customer">
            
 
            <tr>
                <td><xsl:value-of select="@id"/></td>
                <td><xsl:value-of select="name"/></td>
                <td><xsl:value-of select="address"/></td>
            </tr>
        </xsl:for-each>
    </table>
</xsl:template>
<xsl:template match="customer_accounts">
    <h2>Customer Accounts</h2>
    <table border="1">
        <tr>
            <th bgcolor="#9acd32">c_id</th>
            <th bgcolor="#9acd32">ac_id</th>
            
        </tr>
        <xsl:for-each select="customer_account">
 
            <tr>
                <td><xsl:value-of select="@c_id"/></td>
                <td><xsl:value-of select="@ac_id"/></td>
                
            </tr>
        </xsl:for-each>
    </table>
</xsl:template>

</xsl:stylesheet>