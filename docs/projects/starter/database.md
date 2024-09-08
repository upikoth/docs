<script setup>
import Mermaid from '../../.vitepress/components/mermaid.vue'
</script>

# Database

В качестве базы данный используется YDB.

<mermaid>
	<pre class='.mermaid'>
		erDiagram
			registrations
			registrations {
				id string PK
				email string
				confirmation_token string
			}
			password_recovery_requests
			password_recovery_requests {
				id string PK
				email string
				confirmation_token string
			}
			sessions
			sessions {
				id string PK
				user_id string
				token string
				user_role string
			}
			users ||--o{ sessions : has
			users {
				id string PK
				email string
				password_hash string
				role string
			}
	</pre>
</mermaid>

## S3

Помимо БД используется s3 для хранения файлов
