<script setup lang="ts">
const email = ref("");

async function resetPassword() {
	const result = await $fetch("/api/auth/reset-password", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: {
			email: email.value,
		},
	});

	console.log(result);
}
</script>

<template>
	<div>
		<h1>Reset password</h1>
		<p>
			<input v-model="email" type="email" placeholder="Email" />
		</p>
		<p>
			<button @click="resetPassword">Reset password</button>
		</p>
	</div>
</template>
