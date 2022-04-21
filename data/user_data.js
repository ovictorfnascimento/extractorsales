import buildData from '../utils/build_data.js';

let user_data = (user_data) => {
    return [
        new buildData(
            'User ID',
            'Number',
            'id',
            user_info
        ),
        new buildData(
            'CRM Migration In Progress',
            'Boolean',
            'crm_migration_in_progress',
            user_info
        ),
        new buildData(
            'Abilities',
            'Array',
            'abilities',
            user_info
        ),
        new buildData(
            'Allow Outgoing Email',
            'Boolean',
            'allow_outgoing_email',
            user_info
        ),
        new buildData(
            'Analytic Access',
            'Boolean',
            'analytic_access',
            user_info
        ),
        new buildData(
            'Confirmed',
            'Boolean',
            'confirmed',
            user_info
        ),
        new buildData(
            'User name',
            'String',
            'display_name',
            user_info
        ),
        new buildData(
            'User E-Mail',
            'String',
            'email',
            user_info
        ),
        new buildData(
            'E-Mail Association',
            'Boolean',
            'email_association',
            user_info
        ),
        new buildData(
            'E-Mail Deal Association',
            'Boolean',
            'email_deal_association',
            user_info
        ),
        new buildData(
            'E-Mail Tracking',
            'Boolean',
            'email_tracking',
            user_info
        ),
        new buildData(
            'Import History',
            'Boolean',
            'import_history',
            user_info
        ),
        new buildData(
            'Active User',
            'Boolean',
            'is_active',
            user_info
        ),
        new buildData(
            'Is Forgotten',
            'Boolean',
            'is_forgotten',
            user_info
        ),
        new buildData(
            'Report Access',
            'Boolean',
            'report_access',
            user_info
        ),
        new buildData(
            'Report Export',
            'Boolean',
            'report_export',
            user_info
        ),
        new buildData(
            'Restrict API token access',
            'Boolean',
            'restrict_api_token_access',
            user_info
        ),
        new buildData(
            'Role Id',
            'Number',
            'role_id',
            user_info
        ),
        new buildData(
            'Show NPS',
            'Boolean',
            'show_nps',
            user_info
        ),
        new buildData(
            'UUID',
            'Number',
            'uuid',
            user_info
        )
    ];
};

export default user_data;