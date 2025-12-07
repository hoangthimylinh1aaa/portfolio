<script lang="ts">
  import { Motion } from 'svelte-motion';
  import { _ } from 'svelte-i18n';
  import Navigation from '$lib/components/Navigation.svelte';

  let formData = {
    name: '',
    email: '',
    message: '',
  };

  function handleSubmit(event: Event): void {
    event.preventDefault();
    console.log('Form submitted:', formData);
  }
</script>

<div class="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
  <Navigation />

  <div class="py-20">
    <div class="max-w-2xl mx-auto px-6">
      <Motion
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        let:motion
      >
        <h1
          use:motion
          class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text mb-8 sm:mb-12 uppercase tracking-wider text-center drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]"
        >
          {$_('contact.title')}
        </h1>
      </Motion>

      <Motion
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        let:motion
      >
        <form use:motion class="card-gaming" on:submit={handleSubmit}>
          <Motion
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            let:motion={motionField}
          >
            <div use:motionField class="mb-6">
              <label
                class="block text-cyan-400 font-gaming font-semibold mb-2 uppercase text-sm tracking-wide"
                for="name"
              >
                {$_('contact.name')}
              </label>
              <input
                bind:value={formData.name}
                class="w-full bg-gray-800/50 border-2 border-cyan-500/30 text-cyan-100 p-4 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition font-gaming"
                type="text"
                id="name"
                required
              />
            </div>
          </Motion>

          <Motion
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            let:motion={motionField}
          >
            <div use:motionField class="mb-6">
              <label
                class="block text-cyan-400 font-gaming font-semibold mb-2 uppercase text-sm tracking-wide"
                for="email"
              >
                {$_('contact.email')}
              </label>
              <input
                bind:value={formData.email}
                class="w-full bg-gray-800/50 border-2 border-cyan-500/30 text-cyan-100 p-4 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition font-gaming"
                type="email"
                id="email"
                required
              />
            </div>
          </Motion>

          <Motion
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            let:motion={motionField}
          >
            <div use:motionField class="mb-6">
              <label
                class="block text-cyan-400 font-gaming font-semibold mb-2 uppercase text-sm tracking-wide"
                for="message"
              >
                {$_('contact.message')}
              </label>
              <textarea
                bind:value={formData.message}
                class="w-full bg-gray-800/50 border-2 border-cyan-500/30 text-cyan-100 p-4 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition font-gaming resize-none"
                id="message"
                rows="6"
                required
              ></textarea>
            </div>
          </Motion>

          <Motion
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            let:motion={motionButton}
          >
            <button
              use:motionButton
              type="submit"
              class="btn-gaming w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-400 hover:to-purple-500"
            >
              {$_('contact.send')}
            </button>
          </Motion>
        </form>
      </Motion>
    </div>
  </div>
</div>
