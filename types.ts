interface Ping {
    health_status: string
}


interface Lists { 
    "lists": [
        {
            id: string;
            web_id: number;
            name: string,
            contact: {
                company: string,
                address1: string,
                address2: string,
                city: string,
                state: string,
                zip: string,
                country: string,
                phone: string
            },
            permission_reminder: string,
            use_archive_bar: boolean,
            campaign_defaults: {
                from_name: string,
                from_email: string,
                subject: string,
                language: string
            },
            notify_on_subscribe: string,
            notify_on_unsubscribe: string,
            date_created: string,
            list_rating: number,
            email_type_option: boolean,
            subscribe_url_short: string,
            subscribe_url_long: string,
            beamer_address: string,
            visibility: string,
            double_optin: false,
            has_welcome: false,
            marketing_permissions: false,
            modules: [],
            stats: {
                member_count: number,
                unsubscribe_count: number,
                cleaned_count: number,
                member_count_since_send: number,
                unsubscribe_count_since_send: number,
                cleaned_count_since_send: number,
                campaign_count: number,
                campaign_last_sent: string,
                merge_field_count: number,
                avg_sub_rate: number,
                avg_unsub_rate: number,
                target_sub_rate: number,
                open_rate: number,
                click_rate: number,
                last_sub_date: string,
                last_unsub_date: string
            },
            _links: [
                {
                    rel: string,
                    href: string,
                    method: string,
                    targetSchema: string
                },
                {
                    rel: string,
                    href: string,
                    method: string,
                    targetSchema: string,
                    schema: string
                },
                {
                    rel: string,
                    href: string,
                    method: string,
                    targetSchema: string,
                    schema: string
                },
                {
                    rel: string,
                    href: string,
                    method: string,
                    targetSchema: string,
                    schema: string
                },
                {
                    rel: string,
                    href: string,
                    method: string
                },
                {
                    rel: string,
                    href: string,
                    method: string,
                    targetSchema: string,
                    schema: string
                },
                {
                    rel: string,
                    href: string,
                    method: string,
                    targetSchema: string
                },
                {
                    rel: string,
                    href: string,
                    method: string,
                    targetSchema: string
                },
                {
                    rel: string,
                    href: string,
                    method: string,
                    targetSchema: string,
                    schema: string
                },
                {
                    rel: string,
                    href: string,
                    method: string,
                    targetSchema: string,
                    schema: string
                },
                {
                    rel: string,
                    href: string,
                    method: string,
                    targetSchema: string,
                    schema: string
                },
                {
                    rel: string,
                    href: string,
                    method: string,
                    targetSchema: string,
                    schema: string
                },
                {
                    rel: string,
                    href: string,
                    method: string,
                    targetSchema: string,
                    schema: string
                },
                {
                    rel: string,
                    href: string,
                    method: string,
                    targetSchema: string,
                    schema: string
                },
                {
                    rel: string,
                    href: string,
                    method: string,
                    targetSchema: string,
                    schema: string
                },
                {
                    rel: string,
                    href: string,
                    method: string,
                    targetSchema: string,
                    schema: string
                }
            ]
        }
    ],
    total_items: number,
    constraints: {
        may_create: boolean,
        max_instances: number,
        current_total_instances: number
    },
    _links: [
        {
            rel: string,
            href: string,
            method: string,
            targetSchema: string,
            schema: string
        },
        {
            rel: string,
            href: string,
            method: string,
            targetSchema: string,
            schema: string
        }
    ]
}



interface ListMembers {
    members: [
        {
            id: string,
            email_address: string,
            unique_email_id: string,
            contact_id: string,
            full_name: string,
            web_id: number,
            email_type: string,
            status: string,
            consents_to_one_to_one_messaging: boolean,
            sms_phone_number: string,
            sms_subscription_status: string,
            sms_subscription_last_updated: string,
            merge_fields: {
                FNAME: string,
                LNAME: string,
                ADDRESS: string,
                PHONE: string,
                BIRTHDAY: string,
                COMPANY: string
            },
            stats: {
                avg_open_rate: number,
                avg_click_rate: number
            },
            ip_signup: string,
            timestamp_signup: string,
            ip_opt: string,
            timestamp_opt: string,
            member_rating: number,
            last_changed: string,
            language: string,
            vip: boolean,
            email_client: string,
            location: {
                latitude: number,
                longitude: number,
                gmtoff: number,
                dstoff: number,
                country_code: string,
                timezone: string,
                region: string
            },
            source: string,
            tags_count: number,
            tags: [],
            list_id: string,
            _links: [
                {
                    rel: string,
                    href: string,
                    method: string,
                    targetSchema: string
                },
                {
                    rel: string,
                    href: string,
                    method: string,
                    targetSchema: string,
                    schema: string
                },
                {
                    rel: string,
                    href: string,
                    method: string,
                    targetSchema: string,
                    schema: string
                },
                {
                    rel: string,
                    href: string,
                    method: string,
                    targetSchema: string,
                    schema: string
                },
                {
                    rel: string,
                    href: string,
                    method: string
                },
                {
                    rel: string,
                    href: string,
                    method: string,
                    targetSchema: string
                },
                {
                    rel: string,
                    href: string,
                    method: string,
                    targetSchema: string
                },
                {
                    rel: string,
                    href: string,
                    method: string,
                    targetSchema: string
                },
                {
                    rel: string,
                    href: string,
                    method: string,
                    targetSchema: string
                },
                {
                    rel: string,
                    href: string,
                    method: string
                }
            ]
        },
        {
            id: string,
            email_address: string,
            unique_email_id: string,
            contact_id: string,
            full_name: string,
            web_id: number,
            email_type: string,
            status: string,
            unsubscribe_reason: string,
            consents_to_one_to_one_messaging: boolean,
            sms_phone_number: string,
            sms_subscription_status: string,
            sms_subscription_last_updated: string,
            merge_fields: {
                FNAME: string,
                LNAME: string,
                ADDRESS: string,
                PHONE: string,
                BIRTHDAY: string,
                COMPANY: string
            },
            stats: {
                avg_open_rate: number,
                avg_click_rate: number
            },
            ip_signup: string,
            timestamp_signup: string,
            ip_opt: string,
            timestamp_opt: string,
            member_rating: number,
            last_changed: string,
            language: string,
            vip: true,
            email_client: string,
            location: {
                latitude: number,
                longitude: number,
                gmtoff: number,
                dstoff: number,
                country_code: string,
                timezone: string,
                region: string
            },
            source: string,
            tags_count: number,
            tags: [],
            list_id: string,
            _links: [
                {
                    rel: string,
                    href: string,
                    method: string,
                    targetSchema: string
                },
                {
                    rel: string,
                    href: string,
                    method: string,
                    targetSchema: string,
                    schema: string
                },
                {
                    rel: string,
                    href: string,
                    method: string,
                    targetSchema: string,
                    schema: string
                },
                {
                    rel: string,
                    href: string,
                    method: string,
                    targetSchema: string,
                    schema: string
                },
                {
                    rel: string,
                    href: string,
                    method: string
                },
                {
                    rel: string,
                    href: string,
                    method: string,
                    targetSchema: string
                },
                {
                    rel: string,
                    href: string,
                    method: string,
                    targetSchema: string
                },
                {
                    rel: string,
                    href: string,
                    method: string,
                    targetSchema: string
                },
                {
                    rel: string,
                    href: string,
                    method: string,
                    targetSchema: string
                },
                {
                    rel: string,
                    href: string,
                    method: string
                }
            ]
        },
        {
            id: string,
            email_address: string,
            unique_email_id: string,
            contact_id: string,
            full_name: string,
            web_id: number,
            email_type: string,
            status: string,
            consents_to_one_to_one_messaging: boolean,
            sms_phone_number: string,
            sms_subscription_status: string,
            sms_subscription_last_updated: string,
            merge_fields: {
                FNAME: string,
                LNAME: string,
                ADDRESS: string,
                PHONE: string,
                BIRTHDAY: string,
                COMPANY: string
            },
            stats: {
                avg_open_rate: number,
                avg_click_rate: number
            },
            ip_signup: string,
            timestamp_signup: string,
            ip_opt: string,
            timestamp_opt: string,
            member_rating: number,
            last_changed: string,
            language: string,
            vip: boolean,
            email_client: string,
            location: {
                latitude: number,
                longitude: number,
                gmtoff: number,
                dstoff: number,
                country_code: string,
                timezone: string,
                region: string
            },
            source: string,
            tags_count: number,
            tags: [],
            list_id: string,
            _links: [
                {
                    rel: string,
                    href: string,
                    method: string,
                    targetSchema: string
                },
                {
                    rel: string,
                    href: string,
                    method: string,
                    targetSchema: string,
                    schema: string
                },
                {
                    rel: string,
                    href: string,
                    method: string,
                    targetSchema: string,
                    schema: string
                },
                {
                    rel: string,
                    href: string,
                    method: string,
                    targetSchema: string,
                    schema: string
                },
                {
                    rel: string,
                    href: string,
                    method: string
                },
                {
                    rel: string,
                    href: string,
                    method: string,
                    targetSchema: string
                },
                {
                    rel: string,
                    href: string,
                    method: string,
                    targetSchema: string
                },
                {
                    rel: string,
                    href: string,
                    method: string,
                    targetSchema: string
                },
                {
                    rel: string,
                    href: string,
                    method: string,
                    targetSchema: string
                },
                {
                    rel: string,
                    href: string,
                    method: string
                }
            ]
        }
    ],
    list_id: string,
    total_items: number,
    _links: [
        {
            rel: string,
            href: string,
            method: string,
            targetSchema: string,
            schema: string
        },
        {
            rel: string,
            href: string,
            method: string,
            targetSchema: string
        },
        {
            rel: string,
            href: string,
            method: string,
            targetSchema: string,
            schema: string
        }
    ]
}