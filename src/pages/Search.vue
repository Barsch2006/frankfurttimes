<script lang="ts">
import LinkHeaderArea from '@/components/LinkHeaderArea.vue';
import FooterArea from '@/components/FooterArea.vue';
import ArticlePreview from '@/components/ArticlePreview.vue';
import { type Article } from '@/types/article';

export default {
    components: {
        LinkHeaderArea,
        FooterArea,
        ArticlePreview
    },
    data() {
        return {
            searchText: '',
            articleData: Array<Article>(),
            isError: false,
            error_msg: '',
        }
    },
    mounted() {
        const params = new URLSearchParams(window.location.search);
        const searchText: string = params.get('s') ?? '';
        this.search(searchText);
    },
    methods: {
        search(searchText?: string | undefined) {
            var sText: string = searchText ?? '';
            if (!searchText) {
                sText = this.searchText;
            }

            fetch('/articleData.json').then((res: Response) => res.json()).then((data: { [key: string]: Article[] }) => {
                try {
                    const keys: string[] = [
                        "frankfurt",
                        "wirtschaft",
                        "usa",
                        "international"
                    ]

                    keys.forEach((key: string) => {
                        data[key].forEach((article: Article) => {
                            if (article && article.title) {
                                if (article.title.search(sText)) {
                                    this.articleData.push(article);
                                }
                            } else {
                                this.isError = true;
                                this.error_msg = "Keine Ergebnisse entsprechen der Suche.";
                            }
                        });
                    });
                    if (this.articleData.length == 0) {
                        this.isError = true;
                        this.error_msg = "Keine Ergebnisse entsprechen der Suche.";
                    }
                } catch (err: Error | any) {
                    this.isError = true;
                    this.error_msg = "Keine Ergebnisse entsprechen der Suche.";
                    console.error(err);
                }
            });
        }
    }
}
</script>

<template>
    <v-app>
        <LinkHeaderArea />

        <v-main :style="{ display: 'flex', justifyContent: 'center', width: '100%' }">
            <v-container>
                <v-row dense>
                    <v-text-field :value="searchText ?? null" variant="underlined" label="Suche" v-model="searchText"
                        clearable></v-text-field>
                    <v-btn elevation="0" color="background" flat @click="search()" icon="mdi-magnify" />
                </v-row>
                <v-row>
                    <v-alert closable title="Fehler bei der Suche" type="error" variant="tonal" v-if="isError"
                        :text="error_msg" />

                    <v-list width="100%" color="background" bg-color="background">
                        <v-list-item color="background" v-bind:key="index" ripple v-for="(arcticle, index) in articleData">
                            <ArticlePreview :author="arcticle.author" :date="arcticle.date" />
                        </v-list-item>
                    </v-list>
                </v-row>
            </v-container>
        </v-main>
    </v-app>

    <FooterArea />
</template>

<style scoped></style>