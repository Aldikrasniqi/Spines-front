<template>
    <div class="h-[300px] max-w-full bg-white">
        <div class="flex max-w-6xl mx-auto flex-col items-center justify-center text-center pt-10">
            <div class="flex flex-col justify-center text-center">
                <h1 class="text-3xl font-bold text-blue">Our Partners</h1>
                <p class="text-gray text-lg font-medium">Trusted by 4,000+ companies</p>
            </div>
            <div class="flex items-center w-full gap-4 h-full overflow-auto">
                <img
                  class="w-full h-32 object-contain text"
                  alt="partner"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATIAAAClCAMAAADoDIG4AAAAe1BMVEX///8AAADh4eHd3d38/PyHh4fZ2dkiIiLU1NQzMzP09PTMzMwfHx9LS0vIyMh4eHilpaXu7u6ysrK+vr64uLhRUVEZGRno6OidnZ0tLS0nJyc8PDxhYWFxcXGioqKtra1DQ0N8fHxpaWmTk5NaWloPDw+Li4uYmJhGRkbbXQRWAAAI7ElEQVR4nO2ba5uqOhKFRREVFUG08YLiXf//Lxy5VKUSAupxn3n2TK/3UwtJqKxUqpJAdzoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4L+L77ocV9mFB9mG9/xeyreP89KNPqnSdkqv/bxn1VzMrez9JPqhDkg1+pWSLqvfO8oNKv1uyLUnmdN+v9LslY8WcxfuVIBkk+4gRJuanzEmx6QeVfrdknVPVfSwy3ifcPNeku3+0lP2tknU6SffDjQ8k+xhI9jH/w5Ilwzhc7RfD9vVB5AXPUvPhp9OvqPp8QBh7RqQzJeuOs9Vq3mqG3xvP96tw0WZF0Z1VFnhtI9EdLp7txMNP0hXXPU+vtEI43LwmM8LlhEptZ4G85Z4eU2bbKxvdFr8eaf4jOA2qmpM01h4tJYtWBzbjbFfNn6cbXv+NZmNrd+7THyqyuSzsqnl93uBdp6sPVfNSR2c5tJRKZkapUaZuult5p6zeq36tn38utZoPMShSsvtVK3ayiHb/cXQeNdGSnVFkEtbbGS+NQrsPRHOPTp1dzeVXllJb7nqbZKNOXKs5r0vmRodasb1hRHdtseKml5lbikwNR/NPlkLmwxpJbFY8e6CPsH+xlnLI0dok2w4tFXkXSpKtPdN/ck6aFZ7diJksYxvap6NpEdT6KPNhjTRYwf0uiey6OjzEbZJNrpZ6vA0lySa2Qs8YIdw9aTJCTLy6Q5dsRTtBUzvTd5Jat6m2I/fW/qi51P2lZA19eMOCnFQZW5+4BPuQ21hETV+b01e84WeuNrbXH80fDqx5qpfS3brIf67mhnbJrpZ6NsmM9jnEZHxpc1wEQbx68IU+leFped0txsNx3FfZlcK7L5qfTHezkxxtS6IwELllmnmJnwzvwqHOValQXRrdh4kfeQsZ2oohjhdPyBiLZIfMi/zuWDxwaZNsfR53n+3HcpCqvrps2YrGMuCFC3WIRi4lv3PPZm9U5D/EZVZIVspVXu2Px0oKXmW5In6WxkbqQsiO56kkveP2qAd1yXg94pmn3Zpke26/N+WLF8NYcX7Jc6wKvDQvNyJDkmYPs89nVSbip6nO2OGCFymuarT09xv9/JEZQaxNei8lE8telaFjU7Krthw02+9Xv7R4Q95eLVqoMS2HUvApHYBns7amcFmK9n0bj9FWL6eyTn7d51/GroAn2fGVZJp1gV5NSGa0zzOoFICCf2ArU3kMPVKTNZwdc8q1Kq8QjEjP2bh9dcbjaC72eZ2fO8K8qTGf/IWnQYNkI70eDWgZzJRkmV6s43NuKn6OgxI5vD5F92rUOIZY91E55Ku1Y1C6cWiqmcPxtDZ/o2fWyikyMw3kT62BuWlgg2RGGlppxrFkh9qiKDTbr9nJWYhmIut/btj/UKA/mjfYjoZn6V1qHBLNilXtDrvZvbrQIJkx4ShWjnRTTScTPmNN/Uks0i9JJjZCm9M+9sxh4Cbvw7FOQD5t218TFFTWrRGPH2IZNrKZlpt2ya5GLQono6I/LJklvZMAetzxg+yWGtsRkmzsGFyXdxn8mjYHAu2cxYAmSPvnAGyE5R7NTHqjZJfMnNF2yerzUq0PturS8KYWpxbJOta98I5zema7rdP2DpYCXvtShD602FrukZy0gbNLNjFq2SWz7VXo2Ru6EDft3Fgy374b3lUzaf9asnndDuZYlalFQg3TkyS0Shn9AclsA0fTaFD+TBqOU6Rkncg8CCvZlI52fy3ZO142aynzN3lZr37YkVJSlX0IrVN3UMTiL72MFL+0SsYrz5Yutcey9ySzHbyQhUVuNQ+gBsv+kK3Tht1fnCxHScWYUCxb95s4tmVMcvtR6ykRL4stGe1Y3WrPmO9JZmufMnIxqOIc/XKLe0kk+2DOlMjL+toRRWUVld+Yj3oPc0/bAJWqL474kIw2uF9JVk/ufExzl+WcuxCX/NwaXNyoG5/1EyJupWer8BJztyGedVgWTPM9EoXTda0BnrPtq/83JavHB95d5GryVkBbGNORQUs8DmjBXyympH7/AD6UMt/k8BlTbitHzFpcpAEctO8x35RM328/cTmM5+3TJNV3umRCWwqjkd3IZmpxIAmzgrD1xIyXwg/9ujqCKN4t8i9j/c/Csr3fSWZ+k829K/wv1do21KhMIFM3ekuVm10jWSPt6PDT2hRTZ5hOKjOAeivR1xu7apqpo8gX52XvSuaMtJ7ymUPpfhet7ZKIHkijRsFP3zVXkk2K5jmX6u/y+NPo9lWqeOW3VeFQbMMSreuOXOZFak+sVlRfSibnpjqkqLbv5GWip5FKiVVHKatq4lOae7iaNs5M+IlS4tUHmCqdOKfY910/movFMyVCNd7OI0uepfyhuCSiwteSOct5lLc/PoprY90ICqnuQrzcScdB0BUbYuECPZpLlSeqE/JJGBUm+GM1Pi/fMen2DkYD+ZM3yr62wPkZ6WtKscH4XrKifX31XjmQevl4ybwkCW5bs2JeUF1Ms16SJN25mg2Bpc/T3XGWyjdarz8nbDkMuSoX7Vlf3pbIkPBHJDOggWt4lyqEyyNvyzvKB3lA2wGQmbVtNJ+GyDhbO4bS7Pwjko3sr8vXnHKsll5E/wtTzrZSBSol2L7aKKkfc9po0HyjH6V6DV8Y6Ee130h2sTrIQSRpy6cn1656QVCNXr9eqkCuKpv87N1/V+jaTktO5pz2zS+QctbGEfg3ki1VnFYcZeZzzW+6ird4ymUqh7cfVujbMWufDx9sohamrVvblB4/zGeszP28fnz+qWQd1/CQrflSwviq51K4IO+kKEZ0a9I69Y/EY7PPP+9NSiaQPjRr2qZ7R2nvon4AYpes6SB7ox/+5D8SIdrJ8hbHP6tElNL95DbSJMs/ypSBcXO2pkH5sYOTtp34N9FdhLf+LVy0L+WSODz3b/t5++HHN3jze/+2an5AFGf7VfjSAD/IVre8oaDlZdCzz3lvFk1fugIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPz1/AdOBnVe2z+1EQAAAABJRU5ErkJggg=="
                />
                <img
                  class="w-full h-32 object-contain text"
                  alt="partner"
                  src="https://logowik.com/content/uploads/images/spotify-black1673.jpg"
                />
                <img
                  class="w-full h-32 object-contain text"
                  alt="partner"
                  src="https://www.logo.wine/a/logo/Slack_Technologies/Slack_Technologies-Black-Logo.wine.svg"
                />
                <img
                  class="w-full h-32 object-contain text"
                  alt="partner"
                  src="https://logowik.com/content/uploads/images/adobe-black8153.jpg"
                />
                <img
                  class="w-full h-32 object-contain text"
                  alt="partner"
                  src="https://cdn.freebiesupply.com/logos/large/2x/zoom-4-logo-png-transparent.png"
                />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts"></script>