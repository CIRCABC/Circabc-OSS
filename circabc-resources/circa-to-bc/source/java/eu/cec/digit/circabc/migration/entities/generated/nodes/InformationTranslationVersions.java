//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, vhudson-jaxb-ri-2.1-558 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2011.01.17 at 12:50:48 PM GMT 
//


package eu.cec.digit.circabc.migration.entities.generated.nodes;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;

import eu.cec.digit.circabc.migration.entities.XMLElement;


/**
 * <p>Java class for informationTranslationVersions complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="informationTranslationVersions">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="version" type="{https://circabc.europa.eu/Import/NodesSchema/1.0}informationTranslationVersion" maxOccurs="unbounded"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "informationTranslationVersions", propOrder = {
    "versions"
})
public class InformationTranslationVersions
    extends XMLElement
    implements Serializable
{

    private final static long serialVersionUID = 1L;
    @XmlElement(name = "version", required = true)
    protected List<InformationTranslationVersion> versions;

    /**
     * Default no-arg constructor
     * 
     */
    public InformationTranslationVersions() {
        super();
    }

    /**
     * Fully-initialising value constructor
     * 
     */
    public InformationTranslationVersions(final List<InformationTranslationVersion> versions) {
        super();
        this.versions = versions;
    }

    /**
     * Gets the value of the versions property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the versions property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getVersions().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link InformationTranslationVersion }
     * 
     * 
     */
    public List<InformationTranslationVersion> getVersions() {
        if (versions == null) {
            versions = new ArrayList<InformationTranslationVersion>();
        }
        return this.versions;
    }

    public InformationTranslationVersions withVersions(InformationTranslationVersion... values) {
        if (values!= null) {
            for (InformationTranslationVersion value: values) {
                getVersions().add(value);
            }
        }
        return this;
    }

    public InformationTranslationVersions withVersions(Collection<InformationTranslationVersion> values) {
        if (values!= null) {
            getVersions().addAll(values);
        }
        return this;
    }

}
