<template>
	<v-app>
		<v-simple-table class="pa-12">
			<tbody>
				<tr>
					<td>Name</td>
					<td>{{ data.name }}</td>
				</tr>
				<tr>
					<td>Username</td>
					<td>{{ data.username }}</td>
				</tr>
				<tr>
					<td>E-mail</td>
					<td>{{ data.email }}</td>
				</tr>
				<tr>
					<td>Adress</td>
					<td>{{ data.address.street }} - {{ data.address.suite }}</td>
				</tr>
				<tr>
					<td>City</td>
					<td>{{ data.address.city }} - {{ data.address.zipcode }}</td>
				</tr>
				<tr>
					<td>Phone</td>
					<td>{{ data.phone }}</td>
				</tr>
				<tr>
					<td>Website</td>
					<td>
						<a :href="'https://' + data.website">{{ data.website }}</a>
					</td>
				</tr>
				<tr>
					<td>Company name</td>
					<td>{{ data.company.name }}</td>
				</tr>
			</tbody>

			<v-container><a :href="'/users'">Wróć</a></v-container>
		</v-simple-table>
	</v-app>
</template>

<script lang="ts">

import { defineComponent } from "vue" ;

import axios from "axios";



export default {
	name: "UserDetails",
	data() {
		return {
			data: null,
			headers: [
				{ text: "ID", value: "id" },
				{ text: "Nazwa użytkownika", value: "name" },
				{ text: "Login", value: "username" },
				{ text: "Adres E-mail", value: "email" },
				{ text: "Numer Telefonu", value: "phone" },
				{ text: "Nazwa Firmy", value: "company.name" },
				{ text: "Akcje", value: "actions" },
			],
		};
	},
	created() {
		axios
			.get(
				`https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`
			)
			.then((res) => {
				this.data = res.data;
			});
	},
};
</script>