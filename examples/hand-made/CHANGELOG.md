# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.8.2](https://github.com/odata2ts/odata2ts/compare/@odata2ts/example-hand-made@0.8.1...@odata2ts/example-hand-made@0.8.2) (2024-08-01)

**Note:** Version bump only for package @odata2ts/example-hand-made

## [0.8.1](https://github.com/odata2ts/odata2ts/compare/@odata2ts/example-hand-made@0.8.0...@odata2ts/example-hand-made@0.8.1) (2024-07-31)

**Note:** Version bump only for package @odata2ts/example-hand-made

# [0.8.0](https://github.com/odata2ts/odata2ts/compare/@odata2ts/example-hand-made@0.7.4...@odata2ts/example-hand-made@0.8.0) (2024-07-31)

### Features

* **generator:** support function overloads for different parameter sets ([#282](https://github.com/odata2ts/odata2ts/issues/282)) ([0b53271](https://github.com/odata2ts/odata2ts/commit/0b532710499d975155c21984a62707ecf4789439))

## [0.7.4](https://github.com/odata2ts/odata2ts/compare/@odata2ts/example-hand-made@0.7.3...@odata2ts/example-hand-made@0.7.4) (2024-05-16)

**Note:** Version bump only for package @odata2ts/example-hand-made

## [0.7.3](https://github.com/odata2ts/odata2ts/compare/@odata2ts/example-hand-made@0.7.2...@odata2ts/example-hand-made@0.7.3) (2024-05-03)

**Note:** Version bump only for package @odata2ts/example-hand-made

## [0.7.2](https://github.com/odata2ts/odata2ts/compare/@odata2ts/example-hand-made@0.7.1...@odata2ts/example-hand-made@0.7.2) (2024-04-22)

### Bug Fixes

* **generator:** add special logic for bound operation name clas resolution (gets prefixed by bound entity) ([#259](https://github.com/odata2ts/odata2ts/issues/259)) ([2a0f9ff](https://github.com/odata2ts/odata2ts/commit/2a0f9ff4cf7222db86af396e00859ae47d426eac))

## [0.7.1](https://github.com/odata2ts/odata2ts/compare/@odata2ts/example-hand-made@0.7.0...@odata2ts/example-hand-made@0.7.1) (2024-03-23)

**Note:** Version bump only for package @odata2ts/example-hand-made

# [0.7.0](https://github.com/odata2ts/odata2ts/compare/@odata2ts/example-hand-made@0.6.0...@odata2ts/example-hand-made@0.7.0) (2024-03-17)

### Features

* **generator:** no collection services for entity types without keys ([#248](https://github.com/odata2ts/odata2ts/issues/248)) ([56540b2](https://github.com/odata2ts/odata2ts/commit/56540b22aa92a7a8c929b4088c69d8af30b63364))

* **generator:** support abstract entities ([#247](https://github.com/odata2ts/odata2ts/issues/247)) ([cbf5121](https://github.com/odata2ts/odata2ts/commit/cbf51214da0fdbccba7fff5a3c0b770f73ed06bd))

# [0.6.0](https://github.com/odata2ts/odata2ts/compare/@odata2ts/example-hand-made@0.5.1...@odata2ts/example-hand-made@0.6.0) (2024-03-10)

### Bug Fixes

* fully qualified name for EntitySet, Singleton & FunctionImport by EntityContainer name instead of namespace ([#245](https://github.com/odata2ts/odata2ts/issues/245)) ([6047122](https://github.com/odata2ts/odata2ts/commit/60471223deac8b14b2d3cfc0946acde7d33d2d64))

### Code Refactoring

* byTypeAndName option ([#238](https://github.com/odata2ts/odata2ts/issues/238)) ([e15f7a6](https://github.com/odata2ts/odata2ts/commit/e15f7a615e0cdf3865fbfce4dee08cdae60b46ad))

### BREAKING CHANGES

* Config options `entitiesByName` and `operationsByName` have been dropped. You must use `byTypeAndName` instead and provide the new type property for each configuration.

Renaming now supports EntityType, ComplexType, EnumType and any operation type (FunctionImport, Function, Action).

## [0.5.1](https://github.com/odata2ts/odata2ts/compare/@odata2ts/example-hand-made@0.5.0...@odata2ts/example-hand-made@0.5.1) (2023-11-15)

**Note:** Version bump only for package @odata2ts/example-hand-made

# [0.5.0](https://github.com/odata2ts/odata2ts/compare/@odata2ts/example-hand-made@0.4.8...@odata2ts/example-hand-made@0.5.0) (2023-10-29)

### Bug Fixes

* **build:** run unit tests of examples ([#232](https://github.com/odata2ts/odata2ts/issues/232)) ([9e70481](https://github.com/odata2ts/odata2ts/commit/9e70481aec5fad29c63b93586ba73b1ea4e9d414))

### Features

* **generator:** allow for renaming of operations ([#231](https://github.com/odata2ts/odata2ts/issues/231)) ([8bff901](https://github.com/odata2ts/odata2ts/commit/8bff901c71522e9b7d48f49908e515e7812766f0))

## [0.4.8](https://github.com/odata2ts/odata2ts/compare/@odata2ts/example-hand-made@0.4.7...@odata2ts/example-hand-made@0.4.8) (2023-10-05)

**Note:** Version bump only for package @odata2ts/example-hand-made

## [0.4.7](https://github.com/odata2ts/odata2ts/compare/@odata2ts/example-hand-made@0.4.6...@odata2ts/example-hand-made@0.4.7) (2023-09-13)

**Note:** Version bump only for package @odata2ts/example-hand-made

## [0.4.6](https://github.com/odata2ts/odata2ts/compare/@odata2ts/example-hand-made@0.4.5...@odata2ts/example-hand-made@0.4.6) (2023-08-08)

**Note:** Version bump only for package @odata2ts/example-hand-made

## [0.4.5](https://github.com/odata2ts/odata2ts/compare/@odata2ts/example-hand-made@0.4.4...@odata2ts/example-hand-made@0.4.5) (2023-07-31)

**Note:** Version bump only for package @odata2ts/example-hand-made

## [0.4.4](https://github.com/odata2ts/odata2ts/compare/@odata2ts/example-hand-made@0.4.3...@odata2ts/example-hand-made@0.4.4) (2023-07-20)

**Note:** Version bump only for package @odata2ts/example-hand-made

## [0.4.3](https://github.com/odata2ts/odata2ts/compare/@odata2ts/example-hand-made@0.4.2...@odata2ts/example-hand-made@0.4.3) (2023-07-13)

**Note:** Version bump only for package @odata2ts/example-hand-made

## [0.4.2](https://github.com/odata2ts/odata2ts/compare/@odata2ts/example-hand-made@0.4.1...@odata2ts/example-hand-made@0.4.2) (2023-07-13)

**Note:** Version bump only for package @odata2ts/example-hand-made

## [0.4.1](https://github.com/odata2ts/odata2ts/compare/@odata2ts/example-hand-made@0.4.0...@odata2ts/example-hand-made@0.4.1) (2023-07-10)

**Note:** Version bump only for package @odata2ts/example-hand-made

# [0.4.0](https://github.com/odata2ts/odata2ts/compare/@odata2ts/example-hand-made@0.3.7...@odata2ts/example-hand-made@0.4.0) (2023-07-10)

### Bug Fixes

* **odata2ts:** use qualified name for bound operations ([#182](https://github.com/odata2ts/odata2ts/issues/182)) ([120c9b8](https://github.com/odata2ts/odata2ts/commit/120c9b807ac209a8eb82b389bc7c21d7df7fe876))

### Features

* **odata2ts:** support for multiple namespaces by merging ([#175](https://github.com/odata2ts/odata2ts/issues/175)) ([db8fd61](https://github.com/odata2ts/odata2ts/commit/db8fd6165c57ceb9e04488789a62f2a5467ecc68))

* **odata2ts:** support schema alias ([#181](https://github.com/odata2ts/odata2ts/issues/181)) ([e0c04a8](https://github.com/odata2ts/odata2ts/commit/e0c04a83e32d99187652966bb9cc32f36ead3df2))

* **odata2ts:** support TypeDefinition elements ([#183](https://github.com/odata2ts/odata2ts/issues/183)) ([d77d2cb](https://github.com/odata2ts/odata2ts/commit/d77d2cbf17383dab50d35bb7374e08a83d264db2))

## [0.3.7](https://github.com/odata2ts/odata2ts/compare/@odata2ts/example-hand-made@0.3.6...@odata2ts/example-hand-made@0.3.7) (2023-06-14)

**Note:** Version bump only for package @odata2ts/example-hand-made

## [0.3.6](https://github.com/odata2ts/odata2ts/compare/@odata2ts/example-hand-made@0.3.5...@odata2ts/example-hand-made@0.3.6) (2023-06-10)

### Bug Fixes

* **examples:** use newest versions & http-client packages ([#169](https://github.com/odata2ts/odata2ts/issues/169)) ([e14416d](https://github.com/odata2ts/odata2ts/commit/e14416d5fd98e2ebd14081400a6b8368e01dd623))

## [0.3.5](https://github.com/odata2ts/odata2ts/compare/@odata2ts/example-hand-made@0.3.4...@odata2ts/example-hand-made@0.3.5) (2023-04-13)

**Note:** Version bump only for package @odata2ts/example-hand-made

## [0.3.4](https://github.com/odata2ts/odata2ts/compare/@odata2ts/example-hand-made@0.3.3...@odata2ts/example-hand-made@0.3.4) (2023-04-08)

**Note:** Version bump only for package @odata2ts/example-hand-made

## [0.3.3](https://github.com/odata2ts/odata2ts/compare/@odata2ts/example-hand-made@0.3.2...@odata2ts/example-hand-made@0.3.3) (2023-04-04)

**Note:** Version bump only for package @odata2ts/example-hand-made

## [0.3.2](https://github.com/odata2ts/odata2ts/compare/@odata2ts/example-hand-made@0.3.1...@odata2ts/example-hand-made@0.3.2) (2023-03-23)

**Note:** Version bump only for package @odata2ts/example-hand-made

## [0.3.1](https://github.com/odata2ts/odata2ts/compare/@odata2ts/example-hand-made@0.3.0...@odata2ts/example-hand-made@0.3.1) (2023-02-24)

**Note:** Version bump only for package @odata2ts/example-hand-made

# [0.3.0](https://github.com/odata2ts/odata2ts/compare/@odata2ts/example-hand-made@0.2.3...@odata2ts/example-hand-made@0.3.0) (2023-02-24)

### Bug Fixes

* **build:** update deps of examples ([831fe07](https://github.com/odata2ts/odata2ts/commit/831fe07197f999dde9509a9166f189b49dccc8bc))

### Features

* improved handling of multiple schemas ([#133](https://github.com/odata2ts/odata2ts/issues/133)) ([9c7733f](https://github.com/odata2ts/odata2ts/commit/9c7733f5f95e8f65df52ed13889d352cc9c7f4fb))

## [0.2.3](https://github.com/odata2ts/odata2ts/compare/@odata2ts/example-hand-made@0.2.2...@odata2ts/example-hand-made@0.2.3) (2023-02-03)

**Note:** Version bump only for package @odata2ts/example-hand-made

## 0.2.2 (2023-01-11)

### Bug Fixes

* **odata2ts:** wrong generation of complex and enum params for q operations ([#111](https://github.com/odata2ts/odata2ts/issues/111)) ([f69aadf](https://github.com/odata2ts/odata2ts/commit/f69aadf52201fbf854d00103f763f465c7557de4))
