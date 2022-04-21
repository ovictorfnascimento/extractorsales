import buildData from '../utils/build_data.js';

let account_data = (account_info) => {
    return [
        new buildData(
            'Freshsales Account ID',
            'Number',
            'id',
            account_info
        ),
        new buildData(
            'Freshcaller Id',
            'Number',
            'freshcaller_account.id',
            account_info
        ),
        new buildData(
            'Freshcaller Account Id',
            'Number',
            'freshcaller_account.freshcaller_account_id',
            account_info
        ),
        new buildData(
            'Calendar Sync Enabled',
            'Boolean',
            'additional_information.calendar_sync_enabled',
            account_info
        ),
        new buildData(
            'Customer Feedback Enabled',
            'Boolean',
            'additional_information.customer_feedback_enabled',
            account_info
        ),
        new buildData(
            'Deal DP Enabled',
            'Boolean',
            'additional_information.deal_dp_enabled',
            account_info
        ),
        new buildData(
            'Additional Features Enabled',
            'Array',
            'additional_information.enabled_features',
            account_info
        ),
        new buildData(
            'Private Tags Enabled',
            'Boolean',
            'additional_information.private_tags_enabled',
            account_info
        ),
        new buildData(
            'Show On-Boarding',
            'Boolean',
            'additional_information.show_onboarding',
            account_info
        ),
        new buildData(
            'Agent Limit',
            'Number',
            'agent_limit',
            account_info
        ),
        new buildData(
            'Allow System E-Mail',
            'Boolean',
            'allow_system_email',
            account_info
        ),
        new buildData(
            'Currency Code',
            'String',
            'base_currency.currency_code',
            account_info
        ),
        new buildData(
            'Exchange Rate',
            'String',
            'base_currency.exchange_rate',
            account_info
        ),
        new buildData(
            'Currency Active',
            'Boolean',
            'base_currency.is_active',
            account_info
        ),
        new buildData(
            'Campaign Exclude Duplicates',
            'Boolean',
            'campaign_exclude_duplicates',
            account_info
        ),
        new buildData(
            'Configure CPQ document',
            'Boolean',
            'configure_cpq_document',
            account_info
        ),
        new buildData(
            'Contract End Date',
            'String',
            'contract_end_date',
            account_info
        ),
        new buildData(
            'Product to Deals Enabled',
            'Boolean',
            'cpq_configs.product_to_deal_enabled',
            account_info
        ),
        new buildData(
            'Product Enabled - CPQ config',
            'Boolean',
            'cpq_configs.product_enabled',
            account_info
        ),
        new buildData(
            'CPQ document enabled',
            'Boolean',
            'cpq_configs.cpq_document_enabled',
            account_info
        ),
        new buildData(
            'Add products to deal - CPQ',
            'Boolean',
            'cpq_configs.add_products_to_deal',
            account_info
        ),
        new buildData(
            'Tax Percent - CPQ',
            'Number',
            'cpq_configs.tax_percent',
            account_info
        ),
        new buildData(
            'Product Migration Status - CPQ [in_progress: 1, delta_migration_progress: 2, completed: 3, failed: 4]',
            'Number',
            'cpq_configs.product_migration_status',
            account_info
        ),
        new buildData(
            'CPQ document Migration Status [in_progress: 1, delta_migration_progress: 2, completed: 3, failed: 4]',
            'Number',
            'cpq_configs.cpq_document_migration_status',
            account_info
        ),
        new buildData(
            'Created At',
            'String',
            'created_at',
            account_info
        ),
        new buildData(
            'CRO Enabled',
            'Boolean',
            'cro_enabled',
            account_info
        ),
        new buildData(
            'Current Plan',
            'String',
            'current_plan',
            account_info
        ),
        new buildData(
            'Current Plan Internal Name',
            'String',
            'current_plan_internal_name',
            account_info
        ),
        new buildData(
            'Date Format',
            'String',
            'date_format',
            account_info
        ),
        new buildData(
            'Do Not Disturb',
            'Boolean',
            'do_not_disturb',
            account_info
        ),
        new buildData(
            'Domains Migrated To Email Service',
            'Boolean',
            'domains_migrated_to_email_service',
            account_info
        ),
        new buildData(
            'Bulk Mail Limit',
            'Number',
            'email_limits.bulk_mail_limit',
            account_info
        ),
        new buildData(
            'Individual Mail Limit',
            'Number',
            'email_limits.individual_mail_limit',
            account_info
        ),
        new buildData(
            'Sales Campaign Mail Limit',
            'Number',
            'email_limits.sales_campaign_limit',
            account_info
        ),
        new buildData(
            'Entity Teams Enabled',
            'Boolean',
            'entity_teams_enabled',
            account_info
        ),
        new buildData(
            'Features Enabled',
            'Array',
            'features',
            account_info
        ),
        new buildData('Freshcaller Status',
            'Number',
            'freshcaller_account.status',
            account_info
        ),
        new buildData(
            'Full Contact Enabled',
            'Boolean',
            'full_contact_enabled',
            account_info
        ),
        new buildData(
            'Implicit Scoring Enabled',
            'Boolean',
            'implicit_scoring_enabled',
            account_info
        ),
        new buildData(
            'Is White-label',
            'Boolean',
            'is_whitelabel',
            account_info
        ),
        new buildData(
            'Locale',
            'String',
            'locale',
            account_info
        ),
        new buildData(
            'ML Calendar Suggestion Enabled',
            'Boolean',
            'ml_calendar_suggestion_enabled',
            account_info
        ),
        new buildData(
            'ML Deal Insights Enabled',
            'Boolean',
            'ml_deal_insights_enabled',
            account_info
        ),
        new buildData(
            'ML Dedupe Enabled',
            'Boolean',
            'ml_dedupe_enabled',
            account_info
        ),
        new buildData(
            'ML Out-Of-Office Enabled',
            'Boolean',
            'ml_out_of_office_enabled',
            account_info
        ),
        new buildData(
            'Multi-Currency Enabled',
            'Boolean',
            'multicurrency_enabled',
            account_info
        ),
        new buildData(
            'Organisation Bundle Id',
            'String',
            'organisation.bundle_id',
            account_info
        ),
        new buildData(
            'Organisation Id',
            'String',
            'organisation.id',
            account_info
        ),
        new buildData(
            'Pod',
            'String',
            'pod_info',
            account_info
        ),
        new buildData(
            'Product Name',
            'String',
            'product_name',
            account_info
        ),
        new buildData(
            'Single Campaign Per Entity',
            'Boolean',
            'single_campaign_per_entity',
            account_info
        ),
        new buildData(
            'Subscription Name',
            'String',
            'subscription.name',
            account_info
        ),
        new buildData(
            'Subscription Name',
            'String',
            'subscription.display_name',
            account_info
        ),
        new buildData(
            'Subscription Currency',
            'String',
            'subscription_currency',
            account_info
        ),
        new buildData(
            'Subscription MRR',
            'Number',
            'subscription_mrr',
            account_info
        ),
        new buildData(
            'Subscription State',
            'String',
            'subscription_state',
            account_info
        ),
        new buildData(
            'Subscription Renewal At',
            'String',
            'subscription_state_info.next_renewal_at',
            account_info
        ),
        new buildData(
            'Subscription Renewal Period',
            'String',
            'subscription_state_info.renewal_period',
            account_info
        ),
        new buildData(
            'Temp Features',
            'Array',
            'temp_features',
            account_info
        ),
        new buildData('Time Format',
            'String',
            'time_format',
            account_info
        ),
        new buildData(
            'Time Zone',
            'String',
            'time_zone',
            account_info
        ),
        new buildData(
            'Unsubscribe Link In Campaign',
            'Boolean',
            'unsubscribe_link_in_campaign',
            account_info
        ),
        new buildData(
            'Web Form Limit',
            'Number',
            'web_form_limit',
            account_info
        )
    ];
}

export default account_data;