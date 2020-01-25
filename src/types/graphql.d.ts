import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Date: any,
};


export type Genre = {
   __typename?: 'Genre',
  id: Scalars['Int'],
  name: Scalars['String'],
};

export type Movie = {
   __typename?: 'Movie',
  id: Scalars['Int'],
  tmdbId: Scalars['Int'],
  title: Scalars['String'],
  originalTitle: Scalars['String'],
  tagline?: Maybe<Scalars['String']>,
  overview?: Maybe<Scalars['String']>,
  runtime: Scalars['Int'],
  releaseDate: Scalars['Date'],
  posterPath: Scalars['String'],
  backdropPath: Scalars['String'],
  originalLanguage: Scalars['String'],
  adult?: Maybe<Scalars['Boolean']>,
  budget: Scalars['Int'],
};

export type Mutation = {
   __typename?: 'Mutation',
  SignInWithEmail: SignInWithEmailResponse,
  SignUpWithEmail: SignUpWithEmailResponse,
};


export type MutationSignInWithEmailArgs = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type MutationSignUpWithEmailArgs = {
  email: Scalars['String'],
  password: Scalars['String'],
  name: Scalars['String'],
  avatar?: Maybe<Scalars['String']>,
  shortBio?: Maybe<Scalars['String']>
};

export type ProductionCompany = {
   __typename?: 'ProductionCompany',
  id: Scalars['Int'],
  name: Scalars['String'],
  logoPath?: Maybe<Scalars['String']>,
  originCountry: Scalars['String'],
};

export type Query = {
   __typename?: 'Query',
  genre?: Maybe<Genre>,
  movie?: Maybe<Movie>,
  productionCompany?: Maybe<ProductionCompany>,
  user?: Maybe<User>,
};

export type SignInToken = {
   __typename?: 'SignInToken',
  token?: Maybe<Scalars['String']>,
};

export type SignInWithEmailResponse = {
   __typename?: 'SignInWithEmailResponse',
  ok: Scalars['Boolean'],
  error?: Maybe<Scalars['String']>,
  result?: Maybe<SignInToken>,
};

export type SignUpToken = {
   __typename?: 'SignUpToken',
  token?: Maybe<Scalars['String']>,
};

export type SignUpWithEmailResponse = {
   __typename?: 'SignUpWithEmailResponse',
  ok: Scalars['Boolean'],
  error?: Maybe<Scalars['String']>,
  result?: Maybe<SignUpToken>,
};

export type User = {
   __typename?: 'User',
  id: Scalars['Int'],
  email: Scalars['String'],
  password: Scalars['String'],
  name: Scalars['String'],
  avatar?: Maybe<Scalars['String']>,
  shortBio?: Maybe<Scalars['String']>,
  createdAt: Scalars['String'],
};



export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  Genre: ResolverTypeWrapper<Genre>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Movie: ResolverTypeWrapper<Movie>,
  Date: ResolverTypeWrapper<Scalars['Date']>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  ProductionCompany: ResolverTypeWrapper<ProductionCompany>,
  User: ResolverTypeWrapper<User>,
  Mutation: ResolverTypeWrapper<{}>,
  SignInWithEmailResponse: ResolverTypeWrapper<SignInWithEmailResponse>,
  SignInToken: ResolverTypeWrapper<SignInToken>,
  SignUpWithEmailResponse: ResolverTypeWrapper<SignUpWithEmailResponse>,
  SignUpToken: ResolverTypeWrapper<SignUpToken>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  Genre: Genre,
  Int: Scalars['Int'],
  String: Scalars['String'],
  Movie: Movie,
  Date: Scalars['Date'],
  Boolean: Scalars['Boolean'],
  ProductionCompany: ProductionCompany,
  User: User,
  Mutation: {},
  SignInWithEmailResponse: SignInWithEmailResponse,
  SignInToken: SignInToken,
  SignUpWithEmailResponse: SignUpWithEmailResponse,
  SignUpToken: SignUpToken,
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date'
}

export type GenreResolvers<ContextType = any, ParentType extends ResolversParentTypes['Genre'] = ResolversParentTypes['Genre']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type MovieResolvers<ContextType = any, ParentType extends ResolversParentTypes['Movie'] = ResolversParentTypes['Movie']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  tmdbId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  originalTitle?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  tagline?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  overview?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  runtime?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  releaseDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>,
  posterPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  backdropPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  originalLanguage?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  adult?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  budget?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  SignInWithEmail?: Resolver<ResolversTypes['SignInWithEmailResponse'], ParentType, ContextType, RequireFields<MutationSignInWithEmailArgs, 'email' | 'password'>>,
  SignUpWithEmail?: Resolver<ResolversTypes['SignUpWithEmailResponse'], ParentType, ContextType, RequireFields<MutationSignUpWithEmailArgs, 'email' | 'password' | 'name'>>,
};

export type ProductionCompanyResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductionCompany'] = ResolversParentTypes['ProductionCompany']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  logoPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  originCountry?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  genre?: Resolver<Maybe<ResolversTypes['Genre']>, ParentType, ContextType>,
  movie?: Resolver<Maybe<ResolversTypes['Movie']>, ParentType, ContextType>,
  productionCompany?: Resolver<Maybe<ResolversTypes['ProductionCompany']>, ParentType, ContextType>,
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
};

export type SignInTokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['SignInToken'] = ResolversParentTypes['SignInToken']> = {
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type SignInWithEmailResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['SignInWithEmailResponse'] = ResolversParentTypes['SignInWithEmailResponse']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  result?: Resolver<Maybe<ResolversTypes['SignInToken']>, ParentType, ContextType>,
};

export type SignUpTokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['SignUpToken'] = ResolversParentTypes['SignUpToken']> = {
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type SignUpWithEmailResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['SignUpWithEmailResponse'] = ResolversParentTypes['SignUpWithEmailResponse']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  result?: Resolver<Maybe<ResolversTypes['SignUpToken']>, ParentType, ContextType>,
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  shortBio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type Resolvers<ContextType = any> = {
  Date?: GraphQLScalarType,
  Genre?: GenreResolvers<ContextType>,
  Movie?: MovieResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  ProductionCompany?: ProductionCompanyResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  SignInToken?: SignInTokenResolvers<ContextType>,
  SignInWithEmailResponse?: SignInWithEmailResponseResolvers<ContextType>,
  SignUpToken?: SignUpTokenResolvers<ContextType>,
  SignUpWithEmailResponse?: SignUpWithEmailResponseResolvers<ContextType>,
  User?: UserResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
