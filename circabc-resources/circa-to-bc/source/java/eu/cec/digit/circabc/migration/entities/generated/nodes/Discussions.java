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
import javax.xml.bind.annotation.XmlRootElement;
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
import eu.cec.digit.circabc.migration.entities.generated.properties.ExtendedProperty;
import eu.cec.digit.circabc.migration.entities.generated.properties.I18NProperty;


/**
 * <p>Java class for discussions complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="discussions">
 *   &lt;complexContent>
 *     &lt;extension base="{https://circabc.europa.eu/Import/NodesSchema/1.0}namedNode">
 *       &lt;sequence>
 *         &lt;element ref="{https://circabc.europa.eu/Import/NodesSchema/1.0}topic" maxOccurs="unbounded" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "discussions", propOrder = {
    "topics"
})
@XmlRootElement(name = "discussions")
public class Discussions
    extends NamedNode
    implements Serializable
{

    private final static long serialVersionUID = 1L;
    @XmlElement(name = "topic")
    protected List<Topic> topics;

    /**
     * Default no-arg constructor
     * 
     */
    public Discussions() {
        super();
    }

    /**
     * Fully-initialising value constructor
     * 
     */
    public Discussions(final NodeRef nodeReference, final List<ExtendedProperty> extendedProperties, final CreatedProperty created, final CreatorProperty creator, final ModifiedProperty modified, final ModifierProperty modifier, final List<I18NProperty> i18NTitles, final TitleProperty title, final List<I18NProperty> i18NDescriptions, final DescriptionProperty description, final OwnerProperty owner, final NameProperty name, final List<Topic> topics) {
        super(nodeReference, extendedProperties, created, creator, modified, modifier, i18NTitles, title, i18NDescriptions, description, owner, name);
        this.topics = topics;
    }

    /**
     * Gets the value of the topics property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the topics property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getTopics().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link Topic }
     * 
     * 
     */
    public List<Topic> getTopics() {
        if (topics == null) {
            topics = new ArrayList<Topic>();
        }
        return this.topics;
    }

    public Discussions withTopics(Topic... values) {
        if (values!= null) {
            for (Topic value: values) {
                getTopics().add(value);
            }
        }
        return this;
    }

    public Discussions withTopics(Collection<Topic> values) {
        if (values!= null) {
            getTopics().addAll(values);
        }
        return this;
    }

    @Override
    public Discussions withName(NameProperty value) {
        setName(value);
        return this;
    }

    @Override
    public Discussions withI18NTitles(I18NProperty... values) {
        if (values!= null) {
            for (I18NProperty value: values) {
                getI18NTitles().add(value);
            }
        }
        return this;
    }

    @Override
    public Discussions withI18NTitles(Collection<I18NProperty> values) {
        if (values!= null) {
            getI18NTitles().addAll(values);
        }
        return this;
    }

    @Override
    public Discussions withTitle(TitleProperty value) {
        setTitle(value);
        return this;
    }

    @Override
    public Discussions withI18NDescriptions(I18NProperty... values) {
        if (values!= null) {
            for (I18NProperty value: values) {
                getI18NDescriptions().add(value);
            }
        }
        return this;
    }

    @Override
    public Discussions withI18NDescriptions(Collection<I18NProperty> values) {
        if (values!= null) {
            getI18NDescriptions().addAll(values);
        }
        return this;
    }

    @Override
    public Discussions withDescription(DescriptionProperty value) {
        setDescription(value);
        return this;
    }

    @Override
    public Discussions withOwner(OwnerProperty value) {
        setOwner(value);
        return this;
    }

    @Override
    public Discussions withNodeReference(NodeRef value) {
        setNodeReference(value);
        return this;
    }

    @Override
    public Discussions withExtendedProperties(ExtendedProperty... values) {
        if (values!= null) {
            for (ExtendedProperty value: values) {
                getExtendedProperties().add(value);
            }
        }
        return this;
    }

    @Override
    public Discussions withExtendedProperties(Collection<ExtendedProperty> values) {
        if (values!= null) {
            getExtendedProperties().addAll(values);
        }
        return this;
    }

    @Override
    public Discussions withCreated(CreatedProperty value) {
        setCreated(value);
        return this;
    }

    @Override
    public Discussions withCreator(CreatorProperty value) {
        setCreator(value);
        return this;
    }

    @Override
    public Discussions withModified(ModifiedProperty value) {
        setModified(value);
        return this;
    }

    @Override
    public Discussions withModifier(ModifierProperty value) {
        setModifier(value);
        return this;
    }

}