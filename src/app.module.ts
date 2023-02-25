import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserModule } from './modules/user/user.module';
import * as depthLimit from 'graphql-depth-limit';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: `.${process.env.NODE_ENV || 'development'}.env`,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      include: [UserModule],
      driver: ApolloDriver,
      autoSchemaFile: true,
      path: '/',
      debug: false,
      playground: true,
      validationRules: [depthLimit(5)],
      buildSchemaOptions: {
        dateScalarMode: 'timestamp',
        numberScalarMode: 'integer',
        noDuplicatedFields: true,
      },
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
