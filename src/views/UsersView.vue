<template>
	<v-app
		style="
			width: 70%;
			height: 400px;
			position: absolute;
			top: 50px;
			left: 400px;
		"
	>
		<v-data-table :headers="headers" :items="data" class="elevation-1">
			<template v-slot:[`item.name`]="{ item }">
				<a :href="'/users/' + item.id">{{ item.name }}</a>
			</template>
			<template v-slot:top>
				<v-toolbar flat>
					<v-toolbar-title>Użytkownicy</v-toolbar-title>
					<v-spacer></v-spacer>
					<v-dialog v-model="Delete" max-width="500px">
						<template v-slot:activator="{ on, attrs }">
							<v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on"
								>Dodaj</v-btn
							>
						</template>
					</v-dialog>
					<v-dialog v-model="Delete" max-width="500px">
						<v-card>
							<v-card-title class="text-h7"
								>Czy na pewno chcesz usunąć ten element?</v-card-title
							>
							<v-card-actions>
								<v-spacer></v-spacer>
								<v-btn color="darken-1" text @click="closeD">Wyjdź</v-btn>
								<v-btn color="blue darken-1" text @click="delateConfirm"
									>Tak</v-btn
								>
								<v-spacer></v-spacer>
							</v-card-actions>
						</v-card>
					</v-dialog>
				</v-toolbar>
			</template>
			<template v-slot:[`item.actions`]="{ item }">
				<v-icon small class="mr-2">mdi-pencil</v-icon>
				<v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
			</template>
		</v-data-table>
	</v-app>
</template>

<script lang="ts">


import Vue from "vue";
import { mapState } from "vuex";


export default Vue.extend ({
  
	name: "UsersView",
	
	computed: mapState(["data"]),
	created() {
		this.$store.dispatch("loadData");
	},

	methods: {
		editItem(item: string) {
			
			this.editedIndex = this.data.indexOf(item);
			this.editedItem = Object.assign({}, item);
			this.dialog = true;
		},
		deleteItem(item: string) {
			this.editedIndex = this.data.indexOf(item);
			this.editedItem = Object.assign({}, item);
			this.Delete = true;
		},
		delateConfirm() {
			this.closeD();
		},
		closeD() {
			this.Delete = false;
			this.editedIndex = -1;
		},
	},
	data() {
		return {
			headers: [
				{ text: "ID", value: "id" },
				{ text: "Nazwa użytkownika", value: "name" },
				{ text: "Login", value: "username" },
				{ text: "E-mail", value: "email" },
				{ text: "Nr. Telefonu", value: "phone" },
				{ text: "Nazwa Firmy", value: "company.name" },
				{ text: "Akcje", value: "actions" },
			],
			Delete: false,
			editedIndex: -1,
		};
	},
};)
</script>