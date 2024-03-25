    <template>
    <div class="lg:flex md:flex w-full h-screen items-center justify-between gap-2 p-2 max-w-6xl mx-auto">
        <div class="lg:w-2/5">
            <LoginForm />
        </div>
        <div class="lg:w-1/2">
            <img src="../assets/images/image.png" alt="logo" class="w-full" />
        </div>
    </div>
</template>
<script setup lang="ts">
import LoginForm from '@/components/forms/LoginForm.vue'
</script>