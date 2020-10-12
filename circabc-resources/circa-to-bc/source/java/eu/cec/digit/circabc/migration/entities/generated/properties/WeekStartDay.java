//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, vhudson-jaxb-ri-2.1-558 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2011.01.17 at 12:50:48 PM GMT 
//


package eu.cec.digit.circabc.migration.entities.generated.properties;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlEnumValue;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for weekStartDay.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * <p>
 * <pre>
 * &lt;simpleType name="weekStartDay">
 *   &lt;restriction base="{https://circabc.europa.eu/Import/PropertiesSchema/1.0}stringProperty">
 *     &lt;enumeration value="sunday"/>
 *     &lt;enumeration value="monday"/>
 *     &lt;enumeration value="tuesday"/>
 *     &lt;enumeration value="wednesday"/>
 *     &lt;enumeration value="thursday"/>
 *     &lt;enumeration value="friday"/>
 *     &lt;enumeration value="saturday"/>
 *     &lt;enumeration value="today"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 * 
 */
@XmlType(name = "weekStartDay")
@XmlEnum
public enum WeekStartDay {

    @XmlEnumValue("sunday")
    SUNDAY("sunday"),
    @XmlEnumValue("monday")
    MONDAY("monday"),
    @XmlEnumValue("tuesday")
    TUESDAY("tuesday"),
    @XmlEnumValue("wednesday")
    WEDNESDAY("wednesday"),
    @XmlEnumValue("thursday")
    THURSDAY("thursday"),
    @XmlEnumValue("friday")
    FRIDAY("friday"),
    @XmlEnumValue("saturday")
    SATURDAY("saturday"),
    @XmlEnumValue("today")
    TODAY("today");
    private final String value;

    WeekStartDay(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static WeekStartDay fromValue(String v) {
        for (WeekStartDay c: WeekStartDay.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }

}