--     Copyright European Community 2006 - Licensed under the EUPL V.1.0
--
--  		   http://ec.europa.eu/idabc/en/document/6523
--

ALTER TABLE `alfresco`.`alf_access_control_entry`
 DROP FOREIGN KEY `fk_alf_ace_auth`;

ALTER TABLE `alfresco`.`alf_access_control_entry` ADD CONSTRAINT `fk_alf_ace_auth` FOREIGN KEY `fk_alf_ace_auth` (`authority_id`)
    REFERENCES `alf_authority` (`id`)
    ON DELETE CASCADE
    ON UPDATE RESTRICT;

ALTER TABLE `alfresco`.`alf_acl_member`
 DROP FOREIGN KEY `fk_alf_aclm_ace`;

ALTER TABLE `alfresco`.`alf_acl_member` ADD CONSTRAINT `fk_alf_aclm_ace` FOREIGN KEY `fk_alf_aclm_ace` (`ace_id`)
    REFERENCES `alf_access_control_entry` (`id`)
    ON DELETE CASCADE
    ON UPDATE RESTRICT;


DELETE FROM alf_applied_patch WHERE id = 'patch.db-Circa1.1-alfresco2.2.ACL-bug-fix';
INSERT INTO alf_applied_patch
  (id, description, fixes_from_schema, fixes_to_schema, applied_to_schema, target_schema, applied_on_date, applied_to_server, was_executed, succeeded, report)
  VALUES
  (
    'patch.db-Circa1.1-alfresco2.2.ACL-bug-fix', 'Manually executed script upgrade for Circabc 1.1: To fix an Alfresco 2.2 bug when delete authority',
    0, 10000, -1, 63, null, 'UNKOWN', 1, 1, 'Script completed'
  );

