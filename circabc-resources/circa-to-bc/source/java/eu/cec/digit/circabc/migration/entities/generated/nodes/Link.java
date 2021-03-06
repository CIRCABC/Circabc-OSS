//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, vhudson-jaxb-ri-2.1-558 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2011.01.17 at 12:50:48 PM GMT 
//


package eu.cec.digit.circabc.migration.entities.generated.nodes;

import java.io.Serializable;
import java.util.Collection;
import java.util.List;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.bind.annotation.XmlType;

import org.alfresco.service.cmr.repository.NodeRef;

import eu.cec.digit.circabc.migration.entities.TypedProperty.CreatedProperty;
import eu.cec.digit.circabc.migration.entities.TypedProperty.CreatorProperty;
import eu.cec.digit.circabc.migration.entities.TypedProperty.DescriptionProperty;
import eu.cec.digit.circabc.migration.entities.TypedProperty.ModifiedProperty;
import eu.cec.digit.circabc.migration.entities.TypedProperty.ModifierProperty;
import eu.cec.digit.circabc.migration.entities.TypedProperty.NameProperty;
import eu.cec.digit.circabc.migration.entities.TypedProperty.OwnerProperty;
import eu.cec.digit.circabc.migration.entities.TypedProperty.TitleProperty;
import eu.cec.digit.circabc.migration.entities.generated.permissions.LibraryUserRights;
import eu.cec.digit.circabc.migration.entities.generated.permissions.Notifications;
import eu.cec.digit.circabc.migration.entities.generated.properties.ExtendedProperty;
import eu.cec.digit.circabc.migration.entities.generated.properties.I18NProperty;


/**
 * <p>Java class for link complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="link">
 *   &lt;complexContent>
 *     &lt;extension base="{https://circabc.europa.eu/Import/NodesSchema/1.0}namedNode">
 *       &lt;sequence>
 *         &lt;element ref="{https://circabc.europa.eu/Import/PermissionsSchema/1.0}notifications" minOccurs="0"/>
 *         &lt;element ref="{https://circabc.europa.eu/Import/PermissionsSchema/1.0}libraryUserRights" minOccurs="0"/>
 *       &lt;/sequence>
 *       &lt;attribute name="reference" use="required" type="{https://circabc.europa.eu/Import/PropertiesSchema/1.0}pathReference" />
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "link", propOrder = {
    "notifications",
    "libraryUserRights"
})
@XmlSeeAlso({
    SharedSpacelink.class
})
public class Link
    extends NamedNode
    implements Serializable
{

    private final static long serialVersionUID = 1L;
    @XmlElement(namespace = "https://circabc.europa.eu/Import/PermissionsSchema/1.0")
    protected Notifications notifications;
    @XmlElement(namespace = "https://circabc.europa.eu/Import/PermissionsSchema/1.0")
    protected LibraryUserRights libraryUserRights;
    @XmlAttribute(required = true)
    protected String reference;

    /**
     * Default no-arg constructor
     * 
     */
    public Link() {
        super();
    }

    /**
     * Fully-initialising value constructor
     * 
     */
    public Link(final NodeRef nodeReference, final List<ExtendedProperty> extendedProperties, final CreatedProperty created, final CreatorProperty creator, final ModifiedProperty modified, final ModifierProperty modifier, final List<I18NProperty> i18NTitles, final TitleProperty title, final List<I18NProperty> i18NDescriptions, final DescriptionProperty description, final OwnerProperty owner, final NameProperty name, final Notifications notifications, final LibraryUserRights libraryUserRights, final String reference) {
        super(nodeReference, extendedProperties, created, creator, modified, modifier, i18NTitles, title, i18NDescriptions, description, owner, name);
        this.notifications = notifications;
        this.libraryUserRights = libraryUserRights;
        this.reference = reference;
    }

    /**
     * Gets the value of the notifications property.
     * 
     * @return
     *     possible object is
     *     {@link Notifications }
     *     
     */
    public Notifications getNotifications() {
        return notifications;
    }

    /**
     * Sets the value of the notifications property.
     * 
     * @param value
     *     allowed object is
     *     {@link Notifications }
     *     
     */
    public void setNotifications(Notifications value) {
        this.notifications = value;
    }

    /**
     * Gets the value of the libraryUserRights property.
     * 
     * @return
     *     possible object is
     *     {@link LibraryUserRights }
     *     
     */
    public LibraryUserRights getLibraryUserRights() {
        return libraryUserRights;
    }

    /**
     * Sets the value of the libraryUserRights property.
     * 
     * @param value
     *     allowed object is
     *     {@link LibraryUserRights }
     *     
     */
    public void setLibraryUserRights(LibraryUserRights value) {
        this.libraryUserRights = value;
    }

    /**
     * Gets the value of the reference property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getReference() {
        return reference;
    }

    /**
     * Sets the value of the reference property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setReference(String value) {
        this.reference = value;
    }

    public Link withNotifications(Notifications value) {
        setNotifications(value);
        return this;
    }

    public Link withLibraryUserRights(LibraryUserRights value) {
        setLibraryUserRights(value);
        return this;
    }

    public Link withReference(String value) {
        setReference(value);
        return this;
    }

    @Override
    public Link withName(NameProperty value) {
        setName(value);
        return this;
    }

    @Override
    public Link withI18NTitles(I18NProperty... values) {
        if (values!= null) {
            for (I18NProperty value: values) {
                getI18NTitles().add(value);
            }
        }
        return this;
    }

    @Override
    public Link withI18NTitles(Collection<I18NProperty> values) {
        if (values!= null) {
            getI18NTitles().addAll(values);
        }
        return this;
    }

    @Override
    public Link withTitle(TitleProperty value) {
        setTitle(value);
        return this;
    }

    @Override
    public Link withI18NDescriptions(I18NProperty... values) {
        if (values!= null) {
            for (I18NProperty value: values) {
                getI18NDescriptions().add(value);
            }
        }
        return this;
    }

    @Override
    public Link withI18NDescriptions(Collection<I18NProperty> values) {
        if (values!= null) {
            getI18NDescriptions().addAll(values);
        }
        return this;
    }

    @Override
    public Link withDescription(DescriptionProperty value) {
        setDescription(value);
        return this;
    }

    @Override
    public Link withOwner(OwnerProperty value) {
        setOwner(value);
        return this;
    }

    @Override
    public Link withNodeReference(NodeRef value) {
        setNodeReference(value);
        return this;
    }

    @Override
    public Link withExtendedProperties(ExtendedProperty... values) {
        if (values!= null) {
            for (ExtendedProperty value: values) {
                getExtendedProperties().add(value);
            }
        }
        return this;
    }

    @Override
    public Link withExtendedProperties(Collection<ExtendedProperty> values) {
        if (values!= null) {
            getExtendedProperties().addAll(values);
        }
        return this;
    }

    @Override
    public Link withCreated(CreatedProperty value) {
        setCreated(value);
        return this;
    }

    @Override
    public Link withCreator(CreatorProperty value) {
        setCreator(value);
        return this;
    }

    @Override
    public Link withModified(ModifiedProperty value) {
        setModified(value);
        return this;
    }

    @Override
    public Link withModifier(ModifierProperty value) {
        setModifier(value);
        return this;
    }

}
