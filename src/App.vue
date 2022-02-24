<template>
	<v-app>
		<v-app-bar app> NXO Admin Panel </v-app-bar>
		<div>
			<v-card class="blue accent-3 mt-16 white--text" style="height: 1000px">
				<v-navigation-drawer permanent height="1000px" class="float-left">
					<v-divider></v-divider>

					<v-list nav>
						<router-link to="/">
							<v-list-item link>
								<v-list-item-title>
									<v-icon>mdi-home</v-icon>Home</v-list-item-title
								>
							</v-list-item>
						</router-link>

						<v-list>
							<v-list-group>
								<template v-slot:activator>
									<v-list-item-title
										><v-icon>mdi-account-arrow-down</v-icon
										>Administracja</v-list-item-title
									>
								</template>
								<router-link to="/users">
									<v-list-item link>
										<v-list-item-title>Użytkownicy</v-list-item-title>
									</v-list-item></router-link
								>
							</v-list-group>
						</v-list>
					</v-list>
				</v-navigation-drawer>
				<router-view />
			</v-card>
		</div>
	</v-app>
</template>

<style>
a {
	text-decoration: none;
}
</style>